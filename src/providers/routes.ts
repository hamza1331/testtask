import { Application } from "express";

import apiRouter from "../routes/Api";

class Routes {
  public mountApi(_express: Application): Application {
    return _express.use(`/`, apiRouter);
  }
}

export default new Routes();
