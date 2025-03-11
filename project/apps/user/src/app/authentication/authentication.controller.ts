import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthenticationService } from './authentication.service';
import { fillDto } from '@project/helpers';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('/login')
  async login(@Body() body: LoginUserDto) {
    const user = await this.authService.login(body);
    return fillDto(LoggedUserRdo, user.toPOJO());
  }

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.createUser(body);

    return fillDto(UserRdo, user.toPOJO());
  }
}
