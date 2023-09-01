import { Body, Controller, Get, Post } from '@nestjs/common';
import { FounderMessageService } from './founder-message.service';
import {
  CreateFounderMessageDto,
  FounderMessageResponseDto,
} from './dtos/founder-message.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('founder-message')
export class FounderMessageController {
  constructor(private readonly founderMessageService: FounderMessageService) {}

  @Get()
  async getFounderMessage(): Promise<FounderMessageResponseDto> {
    return await this.founderMessageService.getFounderMessage();
  }

  @Roles(UserType.ADMIN)
  @Post('')
  async createFounderMessage(@Body() body: CreateFounderMessageDto) {
    return await this.founderMessageService.createFounderMessage(body);
  }
}
