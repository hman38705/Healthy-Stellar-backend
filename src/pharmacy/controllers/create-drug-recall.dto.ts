import { IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';
import { RecallClassification } from '../entities/drug-recall.entity';

export class CreateDrugRecallDto {
  @IsUUID()
  drugId: string;

  @IsString()
  reason: string;

  @IsEnum(RecallClassification)
  classification: RecallClassification;

  @IsString()
  description: string;

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
