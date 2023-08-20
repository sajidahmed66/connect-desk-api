import { Module } from '@nestjs/common';
import { FeaturesController } from './features.controller';
import { FeaturesService } from './features.service';

@Module({
  controllers: [FeaturesController],
  providers: [FeaturesService]
})
export class FeaturesModule {}
