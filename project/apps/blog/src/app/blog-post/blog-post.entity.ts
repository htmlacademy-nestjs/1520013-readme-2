import { Entity } from '@project/core';
import { EPostStatus, IBasePost, ITag, IUser } from '@project/types';

export class BlogPostEntity implements IBasePost, Entity<string> {
  public id!: IBasePost['id'];
  public authorId!: IUser['id'];
  public status!: EPostStatus;
  public tags!: ITag['name'][];
  public publishedAt!: string;
  public createdAt!: string;
  public repost?: { originalPostId: IBasePost['id'] } | undefined;

  constructor(tag: IBasePost) {
    this.populate(tag);
  }

  public populate(data: IBasePost): void {
    this.id = data.id;
    this.authorId = data.authorId;
    this.status = data.status;
    this.tags = data.tags;
    this.publishedAt = data.publishedAt;
    this.createdAt = data.createdAt;
    //TODO implement
    this.repost = undefined;
  }

  public toPOJO() {
    return {
      id: this.id,
      authorId: this.authorId,
      status: this.status,
      tags: this.tags,
      publishedAt: this.publishedAt,
      createdAt: this.createdAt,
      //TODO implement
      repost: this.repost,
    };
  }
}
