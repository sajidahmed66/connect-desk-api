import { Controller, Get } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { FeaturesResponseDto } from './dtos/features.dto';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  getFeatures(): Promise<FeaturesResponseDto[]> {
    return this.featuresService.getFeatures();
  }
}
