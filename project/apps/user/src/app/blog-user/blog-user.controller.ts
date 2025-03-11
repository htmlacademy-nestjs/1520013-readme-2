import { Controller, Get, Param } from '@nestjs/common';
import { BlogUserService } from './blog-user.service';
import { UserRdo } from '../authentication/rdo/user.rdo';
import { fillDto } from '@project/helpers';

@Controller('user')
export class BlogUserController {
  constructor(private readonly blogUserService: BlogUserService) {}

  @Get(':id')
  public async getUserDetails(@Param('id') id: string) {
    const existUser = await this.blogUserService.getUser(id);

    return fillDto(UserRdo, existUser.toPOJO());
  }
}
