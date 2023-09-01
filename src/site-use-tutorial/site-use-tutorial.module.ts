import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { SiteUseTutorialController } from './site-use-tutorial.controller';
import { SiteUseTutorialService } from './site-use-tutorial.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [SiteUseTutorialController],
  providers: [
    SiteUseTutorialService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class SiteUseTutorialModule {}
