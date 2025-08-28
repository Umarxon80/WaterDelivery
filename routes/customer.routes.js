import { Router } from "express";
import { AddCustomer } from "../controllers/customer.controller.js";

const router=Router()

router.post("",AddCustomer)

export default router