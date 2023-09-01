import { Body, Controller, Get, Post } from '@nestjs/common';
import { SiteUseTutorialService } from './site-use-tutorial.service';
import {
  CreateSiteUseTutorialDto,
  SiteUseTutorialResponseDto,
} from './dtos/site-use-tutorial.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('site-use-tutorial')
export class SiteUseTutorialController {
  constructor(
    private readonly siteUseTutorialService: SiteUseTutorialService,
  ) {}

  @Get('')
  getSiteUseTutorials(): Promise<SiteUseTutorialResponseDto[]> {
    return this.siteUseTutorialService.getSiteUseTutorials();
  }

  @Roles(UserType.ADMIN)
  @Post()
  createSiteUseTutorial(@Body() body: CreateSiteUseTutorialDto) {
    return this.siteUseTutorialService.createSiteUseTutorial(body);
  }
}
