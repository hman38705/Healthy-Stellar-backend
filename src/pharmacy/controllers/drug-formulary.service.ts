import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DrugFormulary, FormularyStatus } from '../entities/drug-formulary.entity';

@Injectable()
export class DrugFormularyService {
  constructor(
    @InjectRepository(DrugFormulary)
    private formularyRepository: Repository<DrugFormulary>,
  ) {}

  async create(createDto: Partial<DrugFormulary>): Promise<DrugFormulary> {
    const entry = this.formularyRepository.create(createDto);
    return this.formularyRepository.save(entry);
  }

  async findAll(): Promise<DrugFormulary[]> {
    return this.formularyRepository.find({
      relations: ['drug'],
      order: { updatedAt: 'DESC' },
    });
  }

  async findActive(): Promise<DrugFormulary[]> {
    return this.formularyRepository.find({
      where: { status: FormularyStatus.ACTIVE },
      relations: ['drug'],
      order: { updatedAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<DrugFormulary> {
    const entry = await this.formularyRepository.findOne({
      where: { id },
      relations: ['drug'],
    });
    if (!entry) {
      throw new NotFoundException(`Formulary entry ${id} not found`);
    }
    return entry;
  }

  async findByDrug(drugId: string): Promise<DrugFormulary[]> {
    return this.formularyRepository.find({
      where: { drugId },
      relations: ['drug'],
      order: { updatedAt: 'DESC' },
    });
  }

  async update(id: string, updateDto: Partial<DrugFormulary>): Promise<DrugFormulary> {
    const entry = await this.findOne(id);
    Object.assign(entry, updateDto);
    return this.formularyRepository.save(entry);
  }

  async getCostOptimizationSummary() {
    const entries = await this.findActive();
    const totalEstimatedAnnualCost = entries.reduce(
      (total, entry) => total + Number(entry.estimatedAnnualCost || 0),
      0,
    );
    const tierCounts = entries.reduce<Record<string, number>>((counts, entry) => {
      const tier = entry.tier;
      counts[tier] = (counts[tier] || 0) + 1;
      return counts;
    }, {});

    const highCostDrugs = entries
      .filter((entry) => Number(entry.estimatedAnnualCost || 0) > 10000)
      .map((entry) => ({
        drugId: entry.drugId,
        drugName: entry.drug?.brandName,
        tier: entry.tier,
        estimatedAnnualCost: entry.estimatedAnnualCost,
        alternativeDrugs: entry.alternativeDrugs || [],
      }));

    return {
      totalEstimatedAnnualCost,
      tierCounts,
      highCostDrugs,
      activeFormularyCount: entries.length,
    };
  }
}
