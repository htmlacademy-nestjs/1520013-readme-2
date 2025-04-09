export interface MongoCredentials {
  host: string;
  port: number;
  dbName: string;
  user: string;
  password: string;
  authSource: string;
}
