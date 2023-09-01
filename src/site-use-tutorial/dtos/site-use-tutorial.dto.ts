import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSiteUseTutorialDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  videoLink: string;
}
