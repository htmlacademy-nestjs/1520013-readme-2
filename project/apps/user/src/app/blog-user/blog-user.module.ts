import { Module } from '@nestjs/common';
import { BlogUserService } from './blog-user.service';
import { BlogUserController } from './blog-user.controller';
import { BlogUserRepository } from './blog.user.repository';

@Module({
  providers: [BlogUserService, BlogUserRepository],
  controllers: [BlogUserController],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
