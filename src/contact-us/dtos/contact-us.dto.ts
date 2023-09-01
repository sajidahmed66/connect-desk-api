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
