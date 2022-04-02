/**
 * Pre-start is where we want to place things that must run BEFORE the express server is started.
 * This is useful for environment variables, command-line arguments, and cron-jobs.
 */

import path from "path";
import dotenv from "dotenv";
import commandLineArgs from "command-line-args";
import Joi from "joi";

(async () => {
  const envSchema = Joi.object({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test")
      .required(),
    API_KEY: Joi.string().required(),
    PORT: Joi.string().required(),
  });

  const options = commandLineArgs([
    {
      name: "env",
      alias: "e",
      defaultValue: "development",
      type: String,
    },
  ]);

  // Set the env file
  const result = dotenv.config({
    path: path.join(__dirname, `env/.env.${options.env}.local`),
  });

  if (result.error) {
    throw result.error;
  }

  await envSchema.validateAsync(result.parsed, { allowUnknown: true });
})();
