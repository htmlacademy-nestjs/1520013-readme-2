import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { BlogPostEntity } from './blog-post.entity';
import { EPostStatus, IBasePost } from '@project/types';

@Injectable()
export class BlogPostRepository extends BaseMemoryRepository<BlogPostEntity> {
  async getList(): Promise<BlogPostEntity[]> {
    return [...this.entities.values()];
  }

  async getDraftListForUserId(
    userId: IBasePost['authorId']
  ): Promise<BlogPostEntity[]> {
    const result: BlogPostEntity[] = [];
    for (const entity of this.entities.values()) {
      if (entity.authorId === userId && entity.status === EPostStatus.Draft) {
        result.push(entity);
      }
    }

    return result;
  }

  async findByTitle(title: string): Promise<BlogPostEntity[]> {
    //TODO
    throw new Error('Method not implemented');
  }
}
