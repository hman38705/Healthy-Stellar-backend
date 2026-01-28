import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DrugFormularyService } from '../services/drug-formulary.service';
import { CreateDrugFormularyDto } from '../dto/create-drug-formulary.dto';
import { UpdateDrugFormularyDto } from '../dto/update-drug-formulary.dto';

@Controller('pharmacy/formulary')
export class DrugFormularyController {
  constructor(private formularyService: DrugFormularyService) {}

  @Post()
  async create(@Body() createDto: CreateDrugFormularyDto) {
    return this.formularyService.create(createDto);
  }

  @Get()
  async findAll(@Query('active') active?: string) {
    if (active === 'true') {
      return this.formularyService.findActive();
    }
    return this.formularyService.findAll();
  }

  @Get('summary')
  async getSummary() {
    return this.formularyService.getCostOptimizationSummary();
  }

  @Get('drug/:drugId')
  async getByDrug(@Param('drugId') drugId: string) {
    return this.formularyService.findByDrug(drugId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.formularyService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDrugFormularyDto) {
    return this.formularyService.update(id, updateDto);
  }
}
