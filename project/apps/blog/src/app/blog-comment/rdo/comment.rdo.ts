import { ApiProperty } from '@nestjs/swagger';
import { IBasePost, IUser } from '@project/types';
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment unique id',
    required: true,
  })
  @Expose()
  public id!: string;

  @ApiProperty({
    description: 'Comment content',
    required: true,
  })
  @Expose()
  public message!: string;

  @ApiProperty({
    description: 'Author profile id',
    required: true,
  })
  @Expose()
  public authorId!: IUser['id'];

  @ApiProperty({
    description: 'Post id where comment belongs',
  })
  @Expose()
  public postId!: IBasePost['id'];

  @ApiProperty({
    description: 'Comment was cerated at this time',
  })
  @Expose()
  public createdAt!: string;
}
