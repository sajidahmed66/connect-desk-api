import { Exclude } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class PackageResponseDto {
  id: number;
  name: string;
  features: string[];
  cost: number;

  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<PackageResponseDto>) {
    Object.assign(this, partial);
  }
}

export class CreatePackageDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  features: string[];

  @IsNumber()
  @IsPositive()
  cost: number;
}
export class UpdatePackageDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsArray()
  features?: string[];

  @IsOptional()
  @IsNumber()
  @IsPositive()
  cost?: number;
}
