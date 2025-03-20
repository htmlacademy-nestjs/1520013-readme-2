import { ApiProperty } from '@nestjs/swagger';
import { EPostStatus, IBasePost, ITag } from '@project/types';
import { Expose } from 'class-transformer';

export class BlogPostRdo {
  @Expose()
  @ApiProperty({
    description: 'Blog post id',
    required: true,
  })
  public id!: IBasePost['id'];

  @ApiProperty({
    description: 'Blog author id',
    required: true,
  })
  @Expose()
  public authorId!: string;

  @ApiProperty({
    description: 'Blog post status',
    required: true,
  })
  @Expose()
  public status!: EPostStatus;

  @ApiProperty({
    description: 'Tag names for this post',
    required: true,
    isArray: true,
  })
  @Expose()
  public tags!: ITag['name'][];

  @ApiProperty({
    description: 'Date when this post will be or was published',
    required: true,
  })
  @Expose()
  public publishedAt!: string;

  @ApiProperty({
    description: 'Date when this post was created ',
    required: true,
  })
  @Expose()
  public createdAt!: string;
}
