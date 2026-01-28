import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { CreatePurchaseOrderDto } from '../dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from '../dto/update-purchase-order.dto';

@Controller('pharmacy/purchase-orders')
export class PurchaseOrderController {
  constructor(private orderService: PurchaseOrderService) {}

  @Post()
  async create(@Body() createDto: CreatePurchaseOrderDto) {
    return this.orderService.create(createDto);
  }

  @Get()
  async findAll(@Query('supplierId') supplierId?: string) {
    if (supplierId) {
      return this.orderService.getOrdersBySupplier(supplierId);
    }
    return this.orderService.findAll();
  }

  @Get('pending')
  async getPending() {
    return this.orderService.getPendingOrders();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdatePurchaseOrderDto) {
    return this.orderService.update(id, updateDto);
  }

  @Patch(':id/approve')
  async approve(@Param('id') id: string, @Body('approvedBy') approvedBy: string) {
    return this.orderService.approveOrder(id, approvedBy);
  }

  @Patch(':id/ordered')
  async markAsOrdered(@Param('id') id: string) {
    return this.orderService.markAsOrdered(id);
  }

  @Post(':id/receive')
  async receive(@Param('id') id: string, @Body('items') items: any[]) {
    return this.orderService.receiveOrder(id, items);
  }
}
