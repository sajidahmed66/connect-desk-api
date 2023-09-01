import { Exclude, Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  features: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  subcategoryId?: number;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  features: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  subcategoryId?: number;
}
export class ProductResponseDto {
  id: number;
  title: string;
  features: string;
  image: string;
  @Exclude()
  subcategoryId: number;
  @Expose({ name: 'subcategoryId' })
  subcategory() {
    return this.subcategoryId;
  }
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;
  constructor(partial: Partial<ProductResponseDto>) {
    Object.assign(this, partial);
  }
}
