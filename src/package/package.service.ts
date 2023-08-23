import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PackageResponseDto } from './dtos/package.dto';

interface CreatePackageParams {
  name: string;
  cost: number;
  features: string[];
}
interface UpdatePackageParams {
  name?: string;
  cost?: number;
  features?: string[];
}

@Injectable()
export class PackageService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPackage(): Promise<PackageResponseDto[]> {
    const packages = await this.prismaService.package.findMany({
      select: {
        id: true,
        name: true,
        cost: true,
        features: true,
      },
    });
    if (!packages.length) {
      throw new NotFoundException();
    }

    return packages.map((pack) => new PackageResponseDto(pack));
  }

  async createPackage({ name, cost, features }: CreatePackageParams) {
    const newPackage = await this.prismaService.package.create({
      data: {
        name,
        cost,
        features,
      },
    });

    return new PackageResponseDto(newPackage);
  }

  async updatePackage(id: number, data: UpdatePackageParams) {
    const pack = this.prismaService.package.findUnique({
      where: {
        id,
      },
    });
    if (!pack) {
      throw new NotFoundException();
    }
    const updatedPackage = await this.prismaService.package.update({
      where: { id },
      data,
    });

    return updatedPackage;
  }

  async deletePackage(id: number) {
    try {
      await this.prismaService.package.delete({
        where: { id },
      });
    } catch (error) {
      return new HttpException('not found', 400);
    }
  }
}
