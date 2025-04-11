import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { EUserRole, IUserWithPassword } from '@project/types';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { BlogUserRepository } from '../blog-user/repository';
import { AuthErrorMessage } from './authentication.constants';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserRepository) {}

  async createUser(dto: CreateUserDto): Promise<BlogUserEntity> {
    const { email, firstname, lastname, password, avatar } = dto;

    const existingUser = await this.blogUserRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException(AuthErrorMessage.UserAlreadyExist);
    }

    const newUser: IUserWithPassword = {
      createdAt: new Date(),
      email: email,
      firstname: firstname,
      id: '',
      lastname: lastname,
      passwordHash: '',
      role: EUserRole.User,
      avatar: avatar,
    };

    const newUserEntity = await new BlogUserEntity(newUser).setPassword(
      password
    );

    return this.blogUserRepository.save(newUserEntity);
  }

  async login(dto: LoginUserDto): Promise<BlogUserEntity> {
    const { email, password } = dto;
    const savedUser = await this.blogUserRepository.findByEmail(email);

    if (!savedUser) {
      throw new UnauthorizedException(
        AuthErrorMessage.UserWithThisEmailNotFound
      );
    }

    if (!(await savedUser.comparePassword(password))) {
      throw new UnauthorizedException(AuthErrorMessage.WrongPassword);
    }

    return savedUser;
  }
}
