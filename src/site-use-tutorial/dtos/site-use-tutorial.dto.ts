import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSiteUseTutorialDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  videoLink: string;
}
