import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateSubCategoryDto,
  SubCategoryResponseDto,
  UpdateSubCategoryDto,
} from './dto/subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getSubcategories(): Promise<SubCategoryResponseDto[]> {
    try {
      const subcategories = await this.prismaService.subCategory.findMany({
        include: {
          products: true,
        },
      });
      return subcategories.map((item) => new SubCategoryResponseDto(item));
    } catch (error) {
      throw new HttpException('unable to get subcategories', 400);
    }
  }
  async getSubcategoryById(id: number): Promise<SubCategoryResponseDto> {
    try {
      const selectedCategory = await this.prismaService.subCategory.findUnique({
        where: {
          id,
        },
        include: {
          products: true,
        },
      });
      return new SubCategoryResponseDto(selectedCategory);
    } catch (error) {
      throw new HttpException('subcategory not found', 400);
    }
  }

  async createSubcategory(
    data: CreateSubCategoryDto,
  ): Promise<SubCategoryResponseDto> {
    try {
      const newSubCategory = await this.prismaService.subCategory.create({
        data: {
          name: data.name,

          category_id: data.categoryId,
        },
      });
      return new SubCategoryResponseDto(newSubCategory);
    } catch (error) {
      throw new HttpException('unable to create subcategory', 400);
    }
  }

  async updateSubcategory(
    id: number,
    { name, categoryId }: UpdateSubCategoryDto,
  ): Promise<SubCategoryResponseDto> {
    try {
      const updatedSubCategory = await this.prismaService.subCategory.update({
        where: {
          id: id,
        },
        data: {
          name,
          category_id: categoryId,
        },
      });
      return new SubCategoryResponseDto(updatedSubCategory);
    } catch (error) {
      throw new HttpException('unable to update subcategory', 400);
    }
  }

  async deleteSubcategory(id: number): Promise<void> {
    try {
      await this.prismaService.subCategory.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('unable to delete subcategory', 400);
    }
  }
}
