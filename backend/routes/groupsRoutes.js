import express from "express";
import checkAuth from "../middlewares/check-auth.js";
import {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
} from "../controllers/groupsController.js";

const router = express.Router();

router.use(checkAuth);

router.get("/", getAllGroups); // Obtine toate grupurile
router.get("/:id", getGroupById); // Obține un grup dupa ID
router.post("/", createGroup); // Creează un grup nou
router.put("/:id", updateGroup); // Actualizeaza un grup
router.delete("/:id", deleteGroup); // Șterge un grup

export default router;
