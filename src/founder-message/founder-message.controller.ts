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
import { FounderMessageService } from './founder-message.service';
import {
  CreateFounderMessageDto,
  FounderMessageResponseDto,
  UpdateFounderMessageDto,
} from './dtos/founder-message.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('founder-message')
export class FounderMessageController {
  constructor(private readonly founderMessageService: FounderMessageService) {}

  @Get()
  async getFounderMessage(): Promise<FounderMessageResponseDto[]> {
    return await this.founderMessageService.getFounderMessage();
  }

  @Roles(UserType.ADMIN)
  @Post('')
  async createFounderMessage(@Body() body: CreateFounderMessageDto) {
    return await this.founderMessageService.createFounderMessage(body);
  }

  @Roles(UserType.ADMIN)
  @Put(':id')
  async updateFounderMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateFounderMessageDto,
  ) {
    return await this.founderMessageService.updateFounderMessage(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  async deleteFounderMessage(@Param('id', ParseIntPipe) id: number) {
    return await this.founderMessageService.deleteFounderMessage(id);
  }
}
