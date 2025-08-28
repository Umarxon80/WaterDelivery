import { Router } from "express";
import { AddRegion, DeleteRegion, GetOneRegion, GetRegions, PatchRegion } from "../controllers/region.controller.js";

const router=Router()

router.get("",GetRegions)
router.get("/:id",GetOneRegion)
router.post("",AddRegion)
router.patch("/:id",PatchRegion)
router.delete("/:id",DeleteRegion)

export default router