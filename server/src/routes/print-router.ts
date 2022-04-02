import StatusCodes from "http-status-codes";
import { Request, Router } from "express";
import handler from "express-async-handler";
import printService, { Print } from "@services/print-service";
import { TypedResponse } from "./types";

const router = Router();

export const getPrints = async (
  req: Request,
  res: TypedResponse<{ prints: Print[] }>
) => {
  const prints = await printService.getAll();
  console.log("prints", prints);
  res.status(StatusCodes.OK).json({ prints });
};

router.get("/", handler(getPrints));

export default router;
