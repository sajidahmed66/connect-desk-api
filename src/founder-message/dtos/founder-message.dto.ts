import { IsNotEmpty, IsString } from 'class-validator';

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
