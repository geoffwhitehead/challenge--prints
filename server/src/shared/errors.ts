import HttpStatusCodes from "http-status-codes";

export abstract class CustomError extends Error {
  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

export class ServerError extends CustomError {
  public static readonly Msg = "Internal server error.";
  public static readonly HttpStatus = HttpStatusCodes.INTERNAL_SERVER_ERROR;

  constructor(msg: string = ServerError.Msg) {
    super(msg, ServerError.HttpStatus);
  }
}
