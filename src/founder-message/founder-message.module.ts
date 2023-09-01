import { Module } from '@nestjs/common';
import { FounderMessageController } from './founder-message.controller';
import { FounderMessageService } from './founder-message.service';

@Module({
  controllers: [FounderMessageController],
  providers: [FounderMessageService]
})
export class FounderMessageModule {}
