import { Body, Controller, Post } from '@nestjs/common';
import { SiteUseTutorialService } from './site-use-tutorial.service';
import { CreateSiteUseTutorialDto } from './dtos/site-use-tutorial.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('site-use-tutorial')
export class SiteUseTutorialController {
  constructor(
    private readonly siteUseTutorialService: SiteUseTutorialService,
  ) {}

  @Roles(UserType.ADMIN)
  @Post()
  createSiteUseTutorial(@Body() body: CreateSiteUseTutorialDto) {
    return this.siteUseTutorialService.createSiteUseTutorial(body);
  }
}
