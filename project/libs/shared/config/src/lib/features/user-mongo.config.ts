import Joi = require('joi');
import { registerAs } from '@nestjs/config';
import { validateConfig } from '../../utils';
import { MongoCredentials } from '../interface/mongo-credentials';

const MONGO_DB_DEFAULT_PORT = 27017;

const mongoDbValidationSchema = Joi.object({
  host: Joi.string().not('').hostname().required(),
  port: Joi.number().port().default(MONGO_DB_DEFAULT_PORT),
  dbName: Joi.string().not('').required(),
  user: Joi.string().not('').required(),
  password: Joi.string().not('').required(),
  authSource: Joi.string().not('').required(),
});

function getConfig(): MongoCredentials {
  const config: MongoCredentials = {
    host: process.env['MONGO_HOST'] ?? '',
    port: Number(process.env['MONGO_PORT'] ?? MONGO_DB_DEFAULT_PORT),
    dbName: process.env['MONGO_DB'] || '',
    user: process.env['MONGO_USER'] || '',
    password: process.env['MONGO_PASSWORD'] || '',
    authSource: process.env['MONGO_AUTH_BD'] || '',
  };

  validateConfig(config, mongoDbValidationSchema, 'UserMongoDB');

  return config;
}

export default registerAs('userMongo', getConfig);
