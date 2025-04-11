import Joi = require('joi');

export function validateConfig<T>(
  config: T,
  validationSchema: Joi.Schema,
  configName: string
): void {
  const { error } = validationSchema.validate(config, { abortEarly: false });

  if (error) {
    let message = `[${configName} configuration validation error]: ${error.message}`;
    message += `\n${JSON.stringify(error.details, null, 2)}}`;

    throw new Error(message);
  }
}
