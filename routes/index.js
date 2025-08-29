import { Router } from "express";
import Customerrouter from "./customer.routes.js";
import Districtrouter from "./district.routes.js";
import Water_productrouter from "./water_products.routes.js";
import Addressrouter from "./address.routes.js";
import delivery_stuffrouter from "./delivery_stuff.routes.js";
import orderrouter from "./order.routes.js";
import paymentsrouter from "./payments.routes.js";
import order_itemsrouter from "./order_items.routes.js";

const index=Router()

index.use("/customer",Customerrouter)
index.use("/district",Districtrouter)
index.use("/water_product",Water_productrouter)
index.use("/address",Addressrouter)
index.use("/delivery_staff",delivery_stuffrouter)
index.use("/order",orderrouter)
index.use("/payment",paymentsrouter)
index.use("/order_items",order_itemsrouter)

export default index