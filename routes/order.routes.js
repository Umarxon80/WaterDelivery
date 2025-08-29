import { Router } from "express";
import { Addorders, Deleteorders, GetOneorders, Getorders, Patchorders } from "../controllers/order.controller.js";

const router=Router()

router.get("",Getorders)
router.get("/:id",GetOneorders)
router.post("",Addorders)
router.patch("/:id",Patchorders)
router.delete("/:id",Deleteorders)

export default router