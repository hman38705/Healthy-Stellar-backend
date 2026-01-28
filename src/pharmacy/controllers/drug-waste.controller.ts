import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DrugWasteService } from '../services/drug-waste.service';
import { CreateDrugWasteDto } from '../dto/create-drug-waste.dto';
import { WasteReason } from '../entities/drug-waste.entity';

@Controller('pharmacy/waste')
export class DrugWasteController {
  constructor(private wasteService: DrugWasteService) {}

  @Post()
  async create(@Body() createDto: CreateDrugWasteDto) {
    return this.wasteService.create(createDto);
  }

  @Get()
  async findAll() {
    return this.wasteService.findAll();
  }

  @Get('reason/:reason')
  async getByReason(@Param('reason') reason: WasteReason) {
    return this.wasteService.getWasteByReason(reason);
  }

  @Get('controlled-substances')
  async getControlledSubstanceWaste() {
    return this.wasteService.getControlledSubstanceWaste();
  }

  @Get('report')
  async getReport(
    @Query('reason') reason?: WasteReason,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('drugId') drugId?: string,
  ) {
    return this.wasteService.getWasteReport({
      reason,
      drugId,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    });
  }

  @Get('cost')
  async getTotalCost(@Query('startDate') startDate?: string, @Query('endDate') endDate?: string) {
    return {
      totalCost: await this.wasteService.getTotalWasteCost(
        startDate ? new Date(startDate) : undefined,
        endDate ? new Date(endDate) : undefined,
      ),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.wasteService.findOne(id);
  }

  @Patch(':id/disposal')
  async updateDisposal(@Param('id') id: string, @Body('disposalDetails') disposalDetails: any) {
    return this.wasteService.updateDisposalDetails(id, disposalDetails);
  }
}
