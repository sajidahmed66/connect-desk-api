import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateSiteUseTutorialParams {
  title: string;
  videoLink: string;
}

@Injectable()
export class SiteUseTutorialService {
  constructor(private readonly prismaService: PrismaService) {}

  async createSiteUseTutorial({
    title,
    videoLink,
  }: CreateSiteUseTutorialParams) {
    const newTutorialLink = await this.prismaService.siteUseTutorial.create({
      data: {
        title,
        video_link: videoLink,
      },
    });

    return newTutorialLink;
  }
}
