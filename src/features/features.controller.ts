import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { FeaturesService } from './features.service';
import {
  CreateFeatureDto,
  FeaturesResponseDto,
  UpdateFeatureDto,
} from './dtos/features.dto';

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

  @Put(':id')
  async updateFeature(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateFeatureDto,
  ) {
    return this.featuresService.updateFeature(id, body);
  }
}
