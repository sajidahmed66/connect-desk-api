import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ContactUsController } from './contact-us.controller';
import { ContactUsService } from './contact-us.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [ContactUsController],
  providers: [
    ContactUsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class ContactUsModule {}
