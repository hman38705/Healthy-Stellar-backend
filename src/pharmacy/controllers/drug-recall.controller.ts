import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DrugRecallService } from '../services/drug-recall.service';
import { CreateDrugRecallDto } from '../dto/create-drug-recall.dto';
import { UpdateDrugRecallDto } from '../dto/update-drug-recall.dto';

@Controller('pharmacy/recalls')
export class DrugRecallController {
  constructor(private recallService: DrugRecallService) {}

  @Post()
  async create(@Body() createDto: CreateDrugRecallDto) {
    return this.recallService.create(createDto);
  }

  @Get()
  async findAll(@Query('drugId') drugId?: string) {
    if (drugId) {
      return this.recallService.getRecallsByDrug(drugId);
    }
    return this.recallService.findAll();
  }

  @Get('active')
  async getActive() {
    return this.recallService.getActiveRecalls();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.recallService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDrugRecallDto) {
    return this.recallService.update(id, updateDto);
  }

  @Post(':id/initiate')
  async initiate(@Param('id') id: string) {
    return this.recallService.initiateRecall(id);
  }

  @Post(':id/complete')
  async complete(@Param('id') id: string) {
    return this.recallService.completeRecall(id);
  }

  @Post(':id/actions')
  async addAction(
    @Param('id') id: string,
    @Body('action') action: string,
    @Body('performedBy') performedBy: string,
  ) {
    return this.recallService.addActionTaken(id, action, performedBy);
  }
}
