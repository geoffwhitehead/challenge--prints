import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";
import handler from "express-async-handler";
import userService from "@services/user-service";
import { ParamMissingError } from "@shared/errors";
import { TypedRequest, TypedRequestBody, TypedResponse } from "./types";
import { IUser } from "@models/user-model";

const router = Router();

export const path = {
  get: "/all",
  add: "/add",
  update: "/update",
  delete: "/delete/:id",
} as const;

export const getUsers = async (
  req: Request,
  res: TypedResponse<{ users: IUser[] }>
) => {
  const users = await userService.getAll();
  res.status(StatusCodes.OK).json({ users });
};

const addUser = async (
  req: TypedRequest<Record<string, never>, { user: IUser }>,
  res: Response
) => {
  const { user } = req.body;
  if (!user) {
    throw new ParamMissingError();
  }
  await userService.addOne(user);
  res.status(StatusCodes.OK).end();
};

const updateUser = async (
  req: TypedRequestBody<{ user: IUser }>,
  res: Response
) => {
  const { user } = req.body;
  if (!user) {
    throw new ParamMissingError();
  }
  await userService.updateOne(user);
  res.status(StatusCodes.OK).end();
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    throw new ParamMissingError();
  }
  await userService.delete(Number(id));
  res.status(StatusCodes.OK).end();
};

router.get("/", handler(getUsers));
router.post("/", handler(addUser));
router.patch("/", handler(updateUser));
router.delete("/", handler(deleteUser));

export default router;
