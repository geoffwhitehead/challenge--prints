import { Query, Send } from "express-serve-static-core";
import { Request, Response } from "express";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedRequestQuery<T extends Query> extends Request {
  query: T;
}

export interface TypedResponse<ResBody> extends Response {
  json: Send<ResBody, this>;
}

export interface TypedRequest<
  T extends Query = Record<string, never>,
  U = Record<string, never>,
  V = Record<string, never>
> extends Express.Request {
  body: U;
  query: T;
  params: V;
}
