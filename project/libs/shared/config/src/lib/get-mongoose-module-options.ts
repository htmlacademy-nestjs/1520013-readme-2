import { ConfigFactoryKeyHost } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { getMongoConnectionURI } from '@project/helpers';
import { MongoCredentials } from './interface/mongo-credentials';

export function getMongooseMongooseOptions(
  configKey: ConfigFactoryKeyHost<MongoCredentials>,
  appName?: string
): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: MongoCredentials) => {
      return {
        uri: getMongoConnectionURI({
          authSource: config.authSource,
          dbName: config.dbName,
          host: config.host,
          password: config.password,
          port: config.port,
          user: config.user,
        }),
        appName: appName,
        connectTimeoutMS: 1000,
      };
    },
    inject: [configKey.KEY],
  };
}
