import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './features/app.config';
import userMongoConfig from './features/user-mongo.config';

const USER_ENV_PATH = 'apps/user/user.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [applicationConfig, userMongoConfig],
      envFilePath: USER_ENV_PATH,
    }),
  ],
  exports: [],
})
export class ConfigUserModule {}
