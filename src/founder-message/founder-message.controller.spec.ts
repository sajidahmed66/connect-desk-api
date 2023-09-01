import { Test, TestingModule } from '@nestjs/testing';
import { FounderMessageController } from './founder-message.controller';

describe('FounderMessageController', () => {
  let controller: FounderMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FounderMessageController],
    }).compile();

    controller = module.get<FounderMessageController>(FounderMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
