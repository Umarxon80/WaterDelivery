import { Router } from "express";
import { Addorder_items, Deleteorder_items, GetOneorder_items, Getorder_items, Patchorder_items } from "../controllers/order_items.controller.js";

const router=Router()

router.get("",Getorder_items)
router.get("/:id",GetOneorder_items)
router.post("",Addorder_items)
router.patch("/:id",Patchorder_items)
router.delete("/:id",Deleteorder_items)

export default router