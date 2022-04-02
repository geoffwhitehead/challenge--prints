// Set the env file, must be first
import dotenv from "dotenv";

const result = dotenv.config({
  path: `./src/pre-start/env/.env.test.local`,
});

if (result.error) {
  throw result.error;
}
