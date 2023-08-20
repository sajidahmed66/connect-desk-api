import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [UserModule, PrismaModule, FeaturesModule], // modules goes here 
  controllers: [AppController], // controller goes to controller
  providers: [AppService], // service go to providers 
})
export class AppModule {}
