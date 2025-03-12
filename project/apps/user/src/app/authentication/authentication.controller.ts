import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthenticationService } from './authentication.service';
import { fillDto } from '@project/helpers';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'email password pair does not exist',
  })
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
  })
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() body: LoginUserDto) {
    const user = await this.authService.login(body);
    return fillDto(LoggedUserRdo, user.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'User with same email already exist',
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.CREATED,
    description: 'New user was created',
  })
  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.createUser(body);

    return fillDto(UserRdo, user.toPOJO());
  }
}
