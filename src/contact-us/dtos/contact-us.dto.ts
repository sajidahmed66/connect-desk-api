import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createContactUsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}

export class ContactUsResponseDto {
  id: number;
  name: string;
  email: string;
  subject: string;
  body: string;

  @Exclude()
  created_at: Date;
  @Expose({ name: 'createdAt' })
  createdAt() {
    return this.created_at;
  }

  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<ContactUsResponseDto>) {
    Object.assign(this, partial);
  }
}
