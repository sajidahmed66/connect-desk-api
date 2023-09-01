import { Body, Controller, Post } from '@nestjs/common';
import { FounderMessageService } from './founder-message.service';
import { CreateFounderMessageDto } from './dtos/founder-message.dto';

@Controller('founder-message')
export class FounderMessageController {
  constructor(private readonly founderMessageService: FounderMessageService) {}

  @Post('')
  async createFounderMessage(@Body() body: CreateFounderMessageDto) {
    return await this.founderMessageService.createFounderMessage(body);
  }
}
