import { Response } from "express";

import { HttpStatus, ResMessage } from "../types/status";

class ResponseHandler {
  public static success<T>(res: Response, data?: T) {
    return res.status(HttpStatus.SUCCESS).json({
      status: HttpStatus.SUCCESS,
      message: ResMessage.SUCCESS,
      data,
    });
  }

  public static error<T>(res: Response, error?: T) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      message: ResMessage.FAILED,
      error,
    });
  }

  public static exception<T>(res: Response) {
    return res.status(HttpStatus.SERVER_ERROR).json({
      status: HttpStatus.SERVER_ERROR,
      message: ResMessage.FAILED,
      error: "Something went wrong",
    });
  }
}

export default ResponseHandler;
