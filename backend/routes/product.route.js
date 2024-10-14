import express from "express";
import {getProduct, createProducts, updateProducts, deleteProducts} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
