import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SiteUseTutorialService } from './site-use-tutorial.service';
import {
  CreateSiteUseTutorialDto,
  SiteUseTutorialResponseDto,
  UpdateSiteUseTutorialDto,
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

  @Roles(UserType.ADMIN)
  @Put(':id')
  updateSiteUseTutorial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSiteUseTutorialDto,
  ) {
    return this.siteUseTutorialService.updateSiteUseTutorial(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  deleteSiteUseTutorial(@Param('id', ParseIntPipe) id: number) {
    return this.siteUseTutorialService.deleteSiteUseTutorial(id);
  }
}
