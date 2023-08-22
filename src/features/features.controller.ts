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
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  getFeatures(): Promise<FeaturesResponseDto[]> {
    return this.featuresService.getFeatures();
  }

  @Roles(UserType.ADMIN)
  @Post('')
  createFeature(@Body() body: CreateFeatureDto) {
    return this.featuresService.createFeature(body);
  }

  @Roles(UserType.ADMIN)
  @Put(':id')
  async updateFeature(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateFeatureDto,
  ) {
    return this.featuresService.updateFeature(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  async deleteFeature(@Param('id', ParseIntPipe) id: number) {
    return await this.featuresService.deleteFeature(id);
  }
}
