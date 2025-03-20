import { BaseMemoryRepository } from '@project/core';
import { BlogCommentEntity } from './blog-comment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogCommentRepository extends BaseMemoryRepository<BlogCommentEntity> {
  async findManyByPostId(
    postId: BlogCommentEntity['postId']
  ): Promise<BlogCommentEntity[]> {
    const result: BlogCommentEntity[] = [];

    for (const entity of this.entities.values()) {
      if (entity.postId === postId) {
        result.push(entity);
      }
    }

    return result;
  }
}
