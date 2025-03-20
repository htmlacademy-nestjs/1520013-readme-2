import type { INestApplication } from '@nestjs/common/interfaces';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export type AppSwaggerOptions = {
  titile: string;
  description: string;
  version: string;
};

export const createSwager = (
  app: INestApplication,
  options: AppSwaggerOptions
) => {
  const config = new DocumentBuilder()
    .setTitle(options.titile)
    .setDescription(options.description)
    .setVersion(options.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
};
