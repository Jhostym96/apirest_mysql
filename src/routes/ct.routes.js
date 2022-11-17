import { Router } from "express";
import { methods as ctController } from "../controllers/ct.controller"

const router = Router();

router.get("/", ctController.getCts);
router.get("/:id", ctController.getCt);
router.post("/", ctController.addCt);
router.put("/:id", ctController.updateCt);
router.delete("/:id", ctController.deleteCt);

export default router;

