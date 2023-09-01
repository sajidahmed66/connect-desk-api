import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PackageModule } from './package/package.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { UserInterceptor } from './user/interceptors/user.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { FaqModule } from './faq/faq.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    PackageModule,
    FaqModule,
    ContactUsModule,
  ], // modules goes here
  controllers: [AppController], // controller goes to controller
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ], // service go to providers
})
export class AppModule {}
