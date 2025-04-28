import { Router } from "express";
import { CustomerController } from "../Controllers/customerController.js";

export const customerRouter = Router()

customerRouter.get("/", CustomerController.getAll)
customerRouter.get("/", CustomerController.getByCc)
customerRouter.get("/", CustomerController.getByName)
customerRouter.post("/", CustomerController.create)
customerRouter.patch("/", CustomerController.updatePartialCustomer)

