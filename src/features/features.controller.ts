import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { CreateFeatureDto, FeaturesResponseDto } from './dtos/features.dto';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  getFeatures(): Promise<FeaturesResponseDto[]> {
    return this.featuresService.getFeatures();
  }

  @Post('')
  createFeature(@Body() body: CreateFeatureDto) {
    return this.featuresService.createFeature(body);
  }
}
