import { Router } from "express";
import printRouter from "./print-router";

const baseRouter = Router();

baseRouter.use("/prints", printRouter);

export default baseRouter;
