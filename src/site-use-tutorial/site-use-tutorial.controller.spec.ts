import { Test, TestingModule } from '@nestjs/testing';
import { SiteUseTutorialController } from './site-use-tutorial.controller';

describe('SiteUseTutorialController', () => {
  let controller: SiteUseTutorialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteUseTutorialController],
    }).compile();

    controller = module.get<SiteUseTutorialController>(SiteUseTutorialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
