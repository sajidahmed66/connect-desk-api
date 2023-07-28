import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // modules goes here 
  controllers: [AppController], // controller goes to controller
  providers: [AppService], // service go to providers 
})
export class AppModule {}
