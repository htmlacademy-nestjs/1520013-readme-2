import { Entity } from '@project/core';
import { IPostLike } from '@project/types';

export class PostLikeEntity implements IPostLike, Entity<string> {
  public id!: string;
  public postId!: string;
  public likedBy!: string;

  constructor(like: IPostLike) {
    this.populate(like);
  }

  public populate(data: IPostLike): void {
    this.id = data.id;
    this.postId = data.postId;
    this.likedBy = data.likedBy;
  }

  public toPOJO() {
    return {
      id: this.id,
      postId: this.postId,
      likedBy: this.likedBy,
    };
  }
}
