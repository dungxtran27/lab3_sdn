import express from "express";

import { categoryController } from "../controller/index.js";
const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAllCate);
export default categoryRouter;
