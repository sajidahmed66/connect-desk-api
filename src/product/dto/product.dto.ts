import { Exclude, Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsArray,
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
export class ProductResponseDto {}
