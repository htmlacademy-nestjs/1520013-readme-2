/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { createSwager } from '@project/helpers';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  if (configService.get<boolean>('application.isSwaggerEnabled')) {
    createSwager(app, {
      titile: 'User service',
      description: 'User API specification',
      version: '0.1',
    });
  }

  const port = configService.getOrThrow<number>('application.port');
  await app.listen(port);

  const environment = configService.get<string>('application.environment');
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}, using ${environment} configuration`
  );
}

bootstrap();
