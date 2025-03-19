import { Module } from '@nestjs/common';
import { BlogCommentController } from './blog-comment.controller';
import { BlogCommentService } from './blog-comment.service';
import { BlogCommentRepository } from './blog-comment.repository';

@Module({
  providers: [BlogCommentService, BlogCommentRepository],
  controllers: [BlogCommentController],
  exports: [BlogCommentService],
})
export class BlogCommentModule {}
