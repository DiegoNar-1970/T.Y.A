import { Router } from "express";
import { ContractController } from "../Controllers/contractController.js";

export const contractRouter = Router()

contractRouter.get("/", ContractController.getAll);
contractRouter.post("/", ContractController.create);
contractRouter.get("/:contract", ContractController.getByRadicado);
