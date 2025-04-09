import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ConfigUserModule,
  getMongooseMongooseOptions,
  userMongoConfig,
} from '@project/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { BlogUserModule } from './blog-user/blog-user.module';

@Module({
  imports: [
    AuthenticationModule,
    BlogUserModule,
    ConfigUserModule,
    MongooseModule.forRootAsync(
      getMongooseMongooseOptions(userMongoConfig, 'UserService')
    ),
  ],
  controllers: [],
})
export class AppModule {}
