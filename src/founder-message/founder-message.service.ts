import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FounderMessageResponseDto } from './dtos/founder-message.dto';

interface CreateFounderMessageParams {
  name: string;
  designation: string;
  body: string;
}

interface UpdateFounderMessageParams {
  name?: string;
  designation?: string;
  body?: string;
}

@Injectable()
export class FounderMessageService {
  constructor(private readonly prismaService: PrismaService) {}

  async getFounderMessage(): Promise<FounderMessageResponseDto> {
    const founderMessage =
      await this.prismaService.messageFromFounder.findFirst({
        select: {
          name: true,
          designation: true,
          body: true,
        },
      });

    if (!founderMessage) {
      throw new NotFoundException();
    }

    return new FounderMessageResponseDto(founderMessage);
  }

  async createFounderMessage({
    name,
    designation,
    body,
  }: CreateFounderMessageParams) {
    const founderMessage = await this.prismaService.messageFromFounder.create({
      data: {
        name,
        designation,
        body,
      },
    });

    return founderMessage;
  }

  async updateFounderMessage(id: number, data: UpdateFounderMessageParams) {
    const message = await this.prismaService.messageFromFounder.findUnique({
      where: { id },
    });

    if (!message) {
      throw new NotFoundException();
    }

    const newMessage = await this.prismaService.messageFromFounder.update({
      where: { id },
      data,
    });

    return new FounderMessageResponseDto(newMessage);
  }
}
