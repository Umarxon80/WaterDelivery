import { Router } from "express";
import { AddCustomer, DeleteCustomer, GetCustomers, GetOneCustomer, PatchCustomer } from "../controllers/customer.controller.js";

const router=Router()

router.get("",GetCustomers)
router.get("/:id",GetOneCustomer)
router.post("",AddCustomer)
router.patch("/:id",PatchCustomer)
router.delete("/:id",DeleteCustomer)

export default router