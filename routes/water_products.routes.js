import { Router } from "express";
import { AddWater_product, DeleteWater_product, GetOneWater_product, GetWater_products, PatchWater_product } from "../controllers/water_product.controller.js";

const router =Router()
router.get("",GetWater_products)
router.get("/:id",GetOneWater_product)
router.post("",AddWater_product)
router.patch("/:id",PatchWater_product)
router.delete("/:id",DeleteWater_product)


export default router