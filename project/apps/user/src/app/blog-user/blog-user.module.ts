import { Module } from '@nestjs/common';
import { BlogUserService } from './blog-user.service';
import { BlogUserController } from './blog-user.controller';

@Module({
  providers: [BlogUserService],
  controllers: [BlogUserController],
})
export class BlogUserModule {}
