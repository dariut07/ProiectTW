import express from "express";
import checkAuth from "../middlewares/check-auth.js";
import {
  getAllClaims,
  getClaimById,
  createClaim,
  updateClaim,
  deleteClaim,
} from "../controllers/claimsController.js";

const router = express.Router();

// Middleware global pentru autentificare
router.use(checkAuth);

// Rute CRUD pentru claims
router.get("/", getAllClaims); // Obține toate cererile
router.get("/:id", getClaimById); // Obține o cerere după ID
router.post("/", createClaim); // Creează o nouă cerere
router.put("/:id", updateClaim); // Actualizează o cerere
router.delete("/:id", deleteClaim); // Șterge o cerere

export default router;
