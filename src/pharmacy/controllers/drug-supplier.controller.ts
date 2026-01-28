import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DrugSupplierService } from '../services/drug-supplier.service';
import { CreateDrugSupplierDto } from '../dto/create-drug-supplier.dto';
import { UpdateDrugSupplierDto } from '../dto/update-drug-supplier.dto';

@Controller('pharmacy/suppliers')
export class DrugSupplierController {
  constructor(private supplierService: DrugSupplierService) {}

  @Post()
  async create(@Body() createDto: CreateDrugSupplierDto) {
    return this.supplierService.create(createDto);
  }

  @Get()
  async findAll(@Query('preferred') preferred?: string) {
    if (preferred === 'true') {
      return this.supplierService.getPreferredSuppliers();
    }
    return this.supplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.supplierService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDrugSupplierDto) {
    return this.supplierService.update(id, updateDto);
  }

  @Patch(':id/reliability')
  async updateReliability(@Param('id') id: string, @Body('score') score: number) {
    return this.supplierService.updateReliabilityScore(id, score);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.supplierService.remove(id);
    return { success: true };
  }
}
