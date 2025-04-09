type MongoConfig = {
  host: string;
  port: number;
  dbName: string;
  user: string;
  password: string;
  authSource: string;
};

export function getMongoConnectionURI({
  host,
  port,
  dbName,
  user,
  password,
  authSource,
}: MongoConfig): string {
  // Так как пароль или имя пользователя может содержать один из этих символов $ : / ? # [ ] @
  // Поэтому, пропускаем их через encodeURIComponent
  // https://www.mongodb.com/docs/manual/reference/connection-string/#srv-connection-format
  const urlSafeUser = encodeURIComponent(user);
  const urlSafePassword = encodeURIComponent(password);

  return `mongodb://${urlSafeUser}:${urlSafePassword}@${host}:${port}/${dbName}?authSource=${authSource}`;
}
