import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeaturesResponseDto } from './dtos/features.dto';

interface CreateFeatureParams {
  name: string;
  cost: number;
  featues: string[];
}
interface UpdateFeatureParams {
  name?: string;
  cost?: number;
  featues?: string[];
}

@Injectable()
export class FeaturesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getFeatures(): Promise<FeaturesResponseDto[]> {
    const features = await this.prismaService.package.findMany({
      select: {
        id: true,
        name: true,
        cost: true,
        featues: true,
      },
    });
    if (!features.length) {
      throw new NotFoundException();
    }

    return features.map((feature) => new FeaturesResponseDto(feature));
  }

  async createFeature({ name, cost, featues }: CreateFeatureParams) {
    const newFeature = await this.prismaService.package.create({
      data: {
        name,
        cost,
        featues,
      },
    });

    return new FeaturesResponseDto(newFeature);
  }

  async updateFeature(id: number, data: UpdateFeatureParams) {
    const feature = this.prismaService.package.findUnique({
      where: {
        id,
      },
    });
    if (!feature) {
      throw new NotFoundException();
    }
    const updatedFeature = await this.prismaService.package.update({
      where: { id },
      data,
    });

    return updatedFeature;
  }

  async deleteFeature(id: number) {
    await this.prismaService.package.delete({
      where: { id },
    });
  }
}
