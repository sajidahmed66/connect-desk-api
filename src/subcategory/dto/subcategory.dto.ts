import { Product } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  categoryId: number;
}

export class UpdateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  categoryId: number;
}

export class SubCategoryResponseDto {
  id: number;
  name: string;
  @Exclude()
  category_id: number;
  @Expose({ name: 'categoryId' })
  categoryId() {
    return this.category_id;
  }
  product?: Product;
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;
  constructor(partial: Partial<SubCategoryResponseDto>) {
    Object.assign(this, partial);
  }
}
