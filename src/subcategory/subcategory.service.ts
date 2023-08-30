import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateSubCategoryDto,
  UpdateSubCategoryDto,
} from './dto/subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getSubcategories() {
    try {
      const subcategories = await this.prismaService.subCategory.findMany({
        include: {
          products: true,
        },
      });
      return subcategories;
    } catch (error) {
      return [];
    }
  }
  getSubcategoryById(id: number) {
    return [];
  }
  async createSubcategory(data: CreateSubCategoryDto) {
    try {
      const newSubCategory = await this.prismaService.subCategory.create({
        data: {
          name: data.name,

          category_id: data.categoryId,
        },
      });
      return newSubCategory;
    } catch (error) {}
  }
  updateSubcategory(id: number, data: UpdateSubCategoryDto) {
    return [];
  }
  deleteSubcategory(id: number) {
    return [];
  }
}
