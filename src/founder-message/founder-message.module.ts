import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { FounderMessageController } from './founder-message.controller';
import { FounderMessageService } from './founder-message.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [FounderMessageController],
  providers: [
    FounderMessageService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class FounderMessageModule {}
