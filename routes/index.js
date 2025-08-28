import { Router } from "express";
import Customerrouter from "./customer.routes.js";
import Districtrouter from "./district.routes.js";
import Water_productrouter from "./water_products.routes.js";
import Addressrouter from "./address.routes.js";

const index=Router()

index.use("/customer",Customerrouter)
index.use("/district",Districtrouter)
index.use("/water_product",Water_productrouter)
index.use("/address",Addressrouter)

export default index