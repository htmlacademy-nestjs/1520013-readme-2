import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { BlogUserService } from './blog-user.service';
import { UserRdo } from '../authentication/rdo/user.rdo';
import { fillDto } from '@project/helpers';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Blog user')
@Controller('user')
export class BlogUserController {
  constructor(private readonly blogUserService: BlogUserService) {}

  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User with requested ID not found',
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User with requested ID',
  })
  @Get(':id')
  public async getUserDetails(@Param('id') id: string) {
    const existUser = await this.blogUserService.getUser(id);

    return fillDto(UserRdo, existUser.toPOJO());
  }
}
