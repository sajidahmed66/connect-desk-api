import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [PackageController],
  providers: [
    PackageService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class PackageModule {}
