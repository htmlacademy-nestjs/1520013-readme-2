import { Injectable } from '@nestjs/common';
import { PostLikeRepository } from './post-like.repository';
import { IBasePost, IPostLike, IUser } from '@project/types';
import { PostLikeEntity } from './post-like.entity';

@Injectable()
export class PostLikeService {
  constructor(private readonly postLikeRepository: PostLikeRepository) {}

  public async toggleLike(
    postId: IBasePost['id'],
    userId: IUser['id']
  ): Promise<PostLikeEntity | null> {
    const existingLike = await this.getPostLikeByUserId(postId, userId);

    if (existingLike) {
      await this.removeLikeById(existingLike.id);
      return null;
    }

    const newLike = await this.addLike(postId, userId);

    return newLike;
  }

  private async getPostLikeByUserId(
    postId: IBasePost['id'],
    userId: IUser['id']
  ): Promise<PostLikeEntity | null> {
    const existingLike = await this.postLikeRepository.findByPostIdAndUserId(
      postId,
      userId
    );

    return existingLike ?? null;
  }

  private async addLike(postId: IBasePost['id'], userId: IUser['id']) {
    const newLike: IPostLike = {
      id: '',
      likedBy: userId,
      postId: postId,
    };

    const newLikeEntity = new PostLikeEntity(newLike);

    return this.postLikeRepository.save(newLikeEntity);
  }

  private async removeLikeById(liekId: IPostLike['id']) {
    try {
      await this.postLikeRepository.deleteById(liekId);
    } catch (_err) {
      return true;
    }
  }
}
