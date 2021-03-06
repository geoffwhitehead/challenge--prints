import StatusCodes from "http-status-codes";
import { Router } from "express";
import handler from "express-async-handler";
import printService from "@services/print-service";
import { TypedRequestQuery, TypedResponse } from "./types";
import { Paginated, Print } from "@services/types";
import Joi from "joi";

const router = Router();

export const getPrints = async (
  req: TypedRequestQuery<{ page: string }>,
  res: TypedResponse<Paginated<Print>>
) => {
  const schema = Joi.object({
    page: Joi.number(),
  });

  await schema.validateAsync({ page: parseInt(req.query.page) });
  const data = await printService.getPrints(req.query.page);

  res.status(StatusCodes.OK).json(data);
};

export const paths = {
  getPrints: "/",
};

router.get(paths.getPrints, handler(getPrints));

export default router;
