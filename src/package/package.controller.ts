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
import { PackageService } from './package.service';
import {
  CreatePackageDto,
  PackageResponseDto,
  UpdatePackageDto,
} from './dtos/package.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Get()
  getPackage(): Promise<PackageResponseDto[]> {
    return this.packageService.getPackage();
  }

  @Roles(UserType.ADMIN)
  @Post('')
  createPackage(@Body() body: CreatePackageDto) {
    return this.packageService.createPackage(body);
  }

  @Roles(UserType.ADMIN)
  @Put(':id')
  async updatePackage(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePackageDto,
  ) {
    return this.packageService.updatePackage(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  async deletePackage(@Param('id', ParseIntPipe) id: number) {
    return await this.packageService.deletePackage(id);
  }
}
