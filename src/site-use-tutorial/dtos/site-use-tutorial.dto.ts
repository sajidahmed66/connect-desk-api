import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class SiteUseTutorialResponseDto {
  id: number;
  title: string;

  @Exclude()
  video_link: string;
  @Expose({ name: 'videoLink' })
  videoLink() {
    return this.video_link;
  }

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<SiteUseTutorialResponseDto>) {
    Object.assign(this, partial);
  }
}

export class CreateSiteUseTutorialDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  videoLink: string;
}
