import express from "express";

import { productController } from "../controller/index.js";
const productRouter = express.Router();

productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getAll);
export default productRouter;
