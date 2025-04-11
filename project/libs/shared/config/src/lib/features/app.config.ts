import { registerAs } from '@nestjs/config';
import Joi = require('joi');
import { validateConfig } from '../../utils';

const FALLBACK_PORT = 3000;
const ENVIRONMENTS = ['development', 'test', 'stage', 'production'] as const;

export type TEnvironment = (typeof ENVIRONMENTS)[number];

export interface ApplicationConfig {
  environment: TEnvironment;
  port: number;
  isSwaggerEnabled: boolean;
}

const validationSchema = Joi.object({
  environment: Joi.string()
    .valid(...ENVIRONMENTS)
    .required(),
  port: Joi.number().port().default(FALLBACK_PORT),
  isSwaggerEnabled: Joi.boolean().default(false),
});

function getConfig(): ApplicationConfig {
  const config: ApplicationConfig = {
    environment: process.env['NODE_ENV'] as TEnvironment,
    port: Number(process.env['APP_PORT']),
    isSwaggerEnabled:
      (process.env['NODE_ENV'] as TEnvironment) !== 'production',
  };
  validateConfig(config, validationSchema, 'Application');

  return config;
}

export default registerAs('application', getConfig);
