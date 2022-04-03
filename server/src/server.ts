import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import express, { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";
import apiRouter from "./routes/api";
import logger from "jet-logger";
import { CustomError } from "@shared/errors";
import bodyParser from "body-parser";
import * as redis from "@services/redis";
import cors from "cors";

const app = express();
redis.connect();
/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

app.use("/api", apiRouter);

app.use(
  (err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
    return res.status(status).json({
      error: err.message || "server error",
    });
  }
);

export default app;
