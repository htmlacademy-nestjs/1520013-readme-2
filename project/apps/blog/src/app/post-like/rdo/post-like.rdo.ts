import { ApiProperty } from '@nestjs/swagger';
import { IBasePost, IPostLike, IUser } from '@project/types';
import { Exclude, Expose } from 'class-transformer';

export class PostLikeRdo {
  @ApiProperty({
    description: 'like record id',
  })
  @Exclude()
  public id!: IPostLike['id'];

  @ApiProperty({
    description: 'Post this like belongs to',
  })
  @Expose()
  public postId!: IBasePost['id'];

  @ApiProperty({
    description: 'User who owns this like',
  })
  @Expose()
  public userId!: IUser['id'];
}
