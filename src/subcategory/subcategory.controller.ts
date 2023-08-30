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
import { SubcategoryService } from './subcategory.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';
import {
  CreateSubCategoryDto,
  UpdateSubCategoryDto,
} from './dto/subcategory.dto';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Get('')
  getAllSubcategories() {
    return this.subcategoryService.getSubcategories();
  }

  @Roles(UserType.ADMIN)
  @Post('')
  createSubcategory(@Body() body: CreateSubCategoryDto) {
    return this.subcategoryService.createSubcategory(body);
  }

  @Roles(UserType.ADMIN)
  @Put(':id')
  updateSubcategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSubCategoryDto,
  ) {
    return this, this.subcategoryService.updateSubcategory(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  deleteSubcategory(@Param('id', ParseIntPipe) id: number) {}
}
