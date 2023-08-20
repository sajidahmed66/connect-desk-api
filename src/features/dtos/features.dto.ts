import { Exclude } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsArray,
} from 'class-validator';

export class FeaturesResponseDto {
  id: number;
  name: string;
  featues: string[];
  cost: number;

  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<FeaturesResponseDto>) {
    Object.assign(this, partial);
  }
}

export class CreateFeatureDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  featues: string[];

  @IsNumber()
  @IsPositive()
  cost: number;
}
