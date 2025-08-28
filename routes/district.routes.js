import { Router } from "express";
import { Adddistrict, Deletedistrict, Getdistricts, GetOnedistrict, Patchdistrict } from "../controllers/district.controller.js";

const router=Router()

router.get("",Getdistricts)
router.get("/:id",GetOnedistrict)
router.post("",Adddistrict)
router.patch("/:id",Patchdistrict)
router.delete("/:id",Deletedistrict)

export default router