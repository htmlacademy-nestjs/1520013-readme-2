import { ApiProperty } from '@nestjs/swagger';

//TODO real properties
export class CreateBlogPostDto {
  @ApiProperty({
    description: 'Tags for new blog post',
  })
  public tags!: string[];
}
