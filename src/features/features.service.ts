import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeaturesResponseDto } from './dtos/features.dto';

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
}
