import { Router } from "express";
import Customerrouter from "./customer.routes.js";

const index=Router()

index.use("/customer",Customerrouter)

export default index