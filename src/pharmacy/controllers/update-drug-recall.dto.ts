import { IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { RecallClassification, RecallStatus } from '../entities/drug-recall.entity';

export class UpdateDrugRecallDto {
  @IsString()
  @IsOptional()
  reason?: string;

  @IsEnum(RecallClassification)
  @IsOptional()
  classification?: RecallClassification;

  @IsEnum(RecallStatus)
  @IsOptional()
  status?: RecallStatus;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  affectedLotNumbers?: string[];

  @IsArray()
  @IsOptional()
  affectedNdcCodes?: string[];

  @IsString()
  @IsOptional()
  fdaRecallUrl?: string;

  @IsBoolean()
  @IsOptional()
  requiresPatientNotification?: boolean;

  @IsInt()
  @IsOptional()
  affectedPatientsCount?: number;
}
