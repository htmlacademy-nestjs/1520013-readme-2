import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dto/create-tag.dto';
import { BlogTagService } from './blog-tag.service';
import { ITag } from '@project/types';
import { fillDto } from '@project/helpers';
import { TagRdo } from './rdo/tag.rdo';

@ApiTags('Blog tag')
@Controller('blog-tag')
export class BlogTagController {
  constructor(private readonly tagService: BlogTagService) {}

  @ApiResponse({
    type: TagRdo,
    status: HttpStatus.CREATED,
    description: 'Tag was created',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('/create')
  public async create(@Body() dto: CreateTagDto) {
    const tag = await this.tagService.createTag(dto);

    return fillDto(TagRdo, tag.toPOJO());
  }

  @ApiParam({
    name: 'id',
    type: String,
  })
  @ApiResponse({
    type: TagRdo,
    status: HttpStatus.OK,
    description: 'Tag with requested ID',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Tag with requested ID not found',
  })
  @Get('/:id')
  public async getById(@Param('id') id: ITag['id']) {
    const tag = await this.tagService.getById(id);

    return fillDto(TagRdo, tag.toPOJO());
  }

  @ApiParam({
    name: 'name',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Tag with requested name not found',
  })
  @ApiResponse({
    type: TagRdo,
    status: HttpStatus.OK,
    description: 'Tag with requested name',
  })
  @Get('/find/:name')
  public async findByName(@Param('name') name: ITag['name']) {
    const tag = await this.tagService.getByName(name);

    return fillDto(TagRdo, tag.toPOJO());
  }

  @ApiParam({
    name: 'id',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Tag with provided ID was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  public async deleteById(@Param('id') id: ITag['id']): Promise<void> {
    await this.tagService.deleteById(id);

    return void 0;
  }
}
