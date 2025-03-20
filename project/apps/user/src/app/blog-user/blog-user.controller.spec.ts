import { Test, TestingModule } from '@nestjs/testing';
import { BlogUserController } from './blog-user.controller';

describe('BlogUserController', () => {
  let controller: BlogUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogUserController],
    }).compile();

    controller = module.get<BlogUserController>(BlogUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
