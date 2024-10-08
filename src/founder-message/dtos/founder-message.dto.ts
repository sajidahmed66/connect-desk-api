import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FounderMessageResponseDto {
  id: number;
  name: string;
  designation: string;
  body: string;

  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<FounderMessageResponseDto>) {
    Object.assign(this, partial);
  }
}

export class CreateFounderMessageDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  designation: string;
  @IsString()
  @IsNotEmpty()
  body: string;
}
export class UpdateFounderMessageDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  designation?: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  body?: string;
}
