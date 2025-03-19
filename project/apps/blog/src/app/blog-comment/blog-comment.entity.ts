import { Entity } from '@project/core';
import { IComment } from '@project/types';

export class BlogCommentEntity implements IComment, Entity<string> {
  id!: string;
  message!: string;
  authorId!: string;
  postId!: number;
  createdAt!: string;

  constructor(comment: IComment) {
    this.populate(comment);
  }

  public populate(data: IComment): void {
    this.id = data.id;
    this.message = data.message;
    this.authorId = data.authorId;
    this.postId = data.postId;
    this.createdAt = data.createdAt;
  }

  public toPOJO() {
    return {
      id: this.id,
      message: this.message,
      authorId: this.authorId,
      postId: this.postId,
      createdAt: this.createdAt,
    };
  }
}
