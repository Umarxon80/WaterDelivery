import { Router } from "express";
import Customerrouter from "./customer.routes.js";
import Regionrouter from "./region.routes.js";
import Water_productrouter from "./water_products.routes.js";

const index=Router()

index.use("/customer",Customerrouter)
index.use("/region",Regionrouter)
index.use("/water_product",Water_productrouter)

export default index