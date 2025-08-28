import { Router } from "express";
import { Addaddress, Deleteaddress, Getaddress, GetOneaddress, Patchaddress } from "../controllers/address.controller.js";

const router=Router()

router.get("",Getaddress)
router.get("/:id",GetOneaddress)
router.post("",Addaddress)
router.patch("/:id",Patchaddress)
router.delete("/:id",Deleteaddress)

export default router