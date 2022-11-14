import { Request, Response, Router } from "express";

import Task from "../controllers/task";

const router = Router();

router.get("/", (req: Request, res: Response) => res.send("Welcome!"));

router.post("/input", Task.input);
router.get("/output/:ticket", Task.output);

export default router;
