import express from "express";
import * as wineController from "../controllers/wine.controller";

const router = express.Router();

router.get("/", wineController.getAllwines);
router.get("/search/:name", wineController.getwinesByName);
router.delete("/:id", wineController.deletewineById);

export default router;
