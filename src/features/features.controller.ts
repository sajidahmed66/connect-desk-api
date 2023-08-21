import {
  Body,
  Controller,
  Delete,
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
import { User } from 'src/user/decorators/user.decorator';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  getFeatures(): Promise<FeaturesResponseDto[]> {
    return this.featuresService.getFeatures();
  }

  @Post('')
  createFeature(@Body() body: CreateFeatureDto, @User() user) {
    return user;
    // return this.featuresService.createFeature(body);
  }

  @Put(':id')
  async updateFeature(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateFeatureDto,
  ) {
    return this.featuresService.updateFeature(id, body);
  }

  @Delete(':id')
  async deleteFeature(@Param('id', ParseIntPipe) id: number) {
    return await this.featuresService.deleteFeature(id);
  }
}
