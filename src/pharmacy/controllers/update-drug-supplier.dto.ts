import { IsArray, IsBoolean, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDrugSupplierDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  contactPerson?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  licenseNumber?: string;

  @IsArray()
  @IsOptional()
  certifications?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsNumber()
  @IsOptional()
  reliabilityScore?: number;

  @IsNumber()
  @IsOptional()
  averageDeliveryTime?: number;

  @IsBoolean()
  @IsOptional()
  isPreferredSupplier?: boolean;
}
