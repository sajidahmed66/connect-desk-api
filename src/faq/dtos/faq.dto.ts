import { Exclude } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateFaqDto {
  @IsString()
  @IsNotEmpty()
  question: string;
  @IsString()
  @IsNotEmpty()
  answer: string;
}

export class updateFaqDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  question: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  answer: string;
}

export class FaqResponseDto {
  id: number;
  question: string;
  answer: string;
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
  constructor(partial: Partial<FaqResponseDto>) {
    Object.assign(this, partial);
  }
}
