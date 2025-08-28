import { Router } from "express";
import Customerrouter from "./customer.routes.js";
import Regionrouter from "./region.routes.js";

const index=Router()

index.use("/customer",Customerrouter)
index.use("/region",Regionrouter)

export default index