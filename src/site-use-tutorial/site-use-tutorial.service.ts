import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SiteUseTutorialResponseDto } from './dtos/site-use-tutorial.dto';

interface CreateSiteUseTutorialParams {
  title: string;
  videoLink: string;
}
interface UpdateSiteUseTutorialParams {
  title?: string;
  videoLink?: string;
}

@Injectable()
export class SiteUseTutorialService {
  constructor(private readonly prismaService: PrismaService) {}

  async getSiteUseTutorials(): Promise<SiteUseTutorialResponseDto[]> {
    const tutorials = await this.prismaService.siteUseTutorial.findMany({
      select: {
        id: true,
        title: true,
        video_link: true,
      },
    });

    if (!tutorials.length) {
      throw new NotFoundException();
    }

    return tutorials.map(
      (tutorial) => new SiteUseTutorialResponseDto(tutorial),
    );
  }

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

    return new SiteUseTutorialResponseDto(newTutorialLink);
  }

  async updateSiteUseTutorial(id: number, data: UpdateSiteUseTutorialParams) {
    const tutorial = await this.prismaService.siteUseTutorial.findUnique({
      where: {
        id,
      },
    });

    if (!tutorial) {
      throw new NotFoundException();
    }

    const updatedTutorial = await this.prismaService.siteUseTutorial.update({
      where: { id },
      data: {
        title: data.title,
        video_link: data.videoLink,
      },
    });

    return new SiteUseTutorialResponseDto(updatedTutorial);
  }
}
