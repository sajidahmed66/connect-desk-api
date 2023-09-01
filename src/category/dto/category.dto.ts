import { SubCategory } from '@prisma/client';
import { Exclude } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsArray,
  IsOptional,
  IsEmpty,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CategoryResponseDto {
  id: number;
  name: string;
  @IsEmpty()
  @IsArray()
  subcategory: SubCategory[];
  @Exclude()
  updatedAt: Date;
  @Exclude()
  createdAt: Date;

  constructor(partial: Partial<CategoryResponseDto>) {
    Object.assign(this, partial);
  }
}
