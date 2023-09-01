import { Body, Controller, Post } from '@nestjs/common';
import { FounderMessageService } from './founder-message.service';
import { CreateFounderMessageDto } from './dtos/founder-message.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('founder-message')
export class FounderMessageController {
  constructor(private readonly founderMessageService: FounderMessageService) {}

  @Roles(UserType.ADMIN)
  @Post('')
  async createFounderMessage(@Body() body: CreateFounderMessageDto) {
    return await this.founderMessageService.createFounderMessage(body);
  }
}
