import { PartialType } from '@nestjs/swagger';
import { CreateBlogPostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreateBlogPostDto) {}
