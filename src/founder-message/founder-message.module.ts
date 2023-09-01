import { Module } from '@nestjs/common';
import { FounderMessageController } from './founder-message.controller';
import { FounderMessageService } from './founder-message.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FounderMessageController],
  providers: [FounderMessageService],
})
export class FounderMessageModule {}
