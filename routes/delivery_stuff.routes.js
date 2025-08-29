import { Router } from "express";
import { Adddelivery_staff, Deletedelivery_staff, Getdelivery_staff, GetOnedelivery_staff, Patchdelivery_staff } from "../controllers/delivery_staff.controller.js";

const router=Router()

router.get("",Getdelivery_staff)
router.get("/:id",GetOnedelivery_staff)
router.post("",Adddelivery_staff)
router.patch("/:id",Patchdelivery_staff)
router.delete("/:id",Deletedelivery_staff)

export default router