import { Request, Response } from "express";

import Cache from "../utils/cache";
import { binet } from "../utils/fibonacci";
import ResponseHandler from "../utils/handlers";

class Task {
  public static ticket = 1;

  public static input(req: Request, res: Response) {
    try {
      let { number } = req.body;
      number = Number(number);
      if (number && Number.isInteger(number) && number > 0) {
        const ticket = Task.ticket;
        const Fibonacci = binet(number - 1);
        Cache.save(ticket, Fibonacci);
        Task.ticket += 1;
        return ResponseHandler.success(res, { ticket });
      } else {
        return ResponseHandler.error(res, "Invalid number");
      }
    } catch (error) {
      return ResponseHandler.exception(res);
    }
  }

  public static async output(req: Request, res: Response) {
    try {
      const { ticket } = req.params;
      if (ticket) {
        const Fibonacci = Cache.load(Number(ticket));
        if (typeof Fibonacci === "undefined") {
          return ResponseHandler.error(res, "Not found");
        }
        return ResponseHandler.success(res, { Fibonacci });
      } else {
        return ResponseHandler.error(res, "Invalid ticket");
      }
    } catch (error) {
      return ResponseHandler.exception(res);
    }
  }
}

export default Task;
