import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class PurchaseOrderItemDto {
  @IsUUID()
  drugId: string;

  @IsString()
  drugName: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0)
  unitCost: number;

  @IsNumber()
  @IsOptional()
  totalCost?: number;

  @IsString()
  @IsOptional()
  lotNumber?: string;

  @IsDateString()
  @IsOptional()
  expirationDate?: string;
}
