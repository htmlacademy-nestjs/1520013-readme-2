import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostLikeEntity } from './post-like.entity';
import { IBasePost, IUser } from '@project/types';

@Injectable()
export class PostLikeRepository extends BaseMemoryRepository<PostLikeEntity> {
  async findByPostIdAndUserId(
    postId: IBasePost['id'],
    userId: IUser['id']
  ): Promise<PostLikeEntity | null> {
    for (const entity of this.entities.values()) {
      if (entity.postId === postId && entity.likedBy === userId) {
        return entity;
      }
    }

    return null;
  }
}
