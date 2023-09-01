import { Module } from '@nestjs/common';
import { SiteUseTutorialController } from './site-use-tutorial.controller';
import { SiteUseTutorialService } from './site-use-tutorial.service';

@Module({
  controllers: [SiteUseTutorialController],
  providers: [SiteUseTutorialService]
})
export class SiteUseTutorialModule {}
