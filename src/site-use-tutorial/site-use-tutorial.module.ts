import { Module } from '@nestjs/common';
import { SiteUseTutorialController } from './site-use-tutorial.controller';
import { SiteUseTutorialService } from './site-use-tutorial.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SiteUseTutorialController],
  providers: [SiteUseTutorialService],
})
export class SiteUseTutorialModule {}
