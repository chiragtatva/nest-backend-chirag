import { Test, TestingModule } from '@nestjs/testing';
import { SmeHealthController } from './sme-health.controller';
import { SmeHealthService } from './sme-health.service';

describe('SmeHealthController', () => {
  let controller: SmeHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmeHealthController],
      providers: [SmeHealthService],
    }).compile();

    controller = module.get<SmeHealthController>(SmeHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
