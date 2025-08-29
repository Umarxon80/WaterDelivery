import { Router } from "express";
import { Addpayments, Deletepayments, GetOnepayments, Getpayments, Patchpayments } from "../controllers/payments.controller.js";

const router=Router()

router.get("",Getpayments)
router.get("/:id",GetOnepayments)
router.post("",Addpayments)
router.patch("/:id",Patchpayments)
router.delete("/:id",Deletepayments)

export default router