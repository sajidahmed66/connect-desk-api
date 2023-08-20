import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  //   @MinLength(5) --> if length restriction needed
  password: string;
}
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  //   @MinLength(5) --> if length restriction needed
  password: string;
}
