import express from "express";
import checkAuth from "../middlewares/check-auth.js";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const router = express.Router();

// Middleware global pentru autentificare
router.use(checkAuth);

// Rute CRUD pentru utilizatori
router.get("/", getAllUsers); // Obține toți utilizatorii
router.get("/:id", getUserById); // Obține un utilizator după ID
router.post("/", createUser); // Creează un nou utilizator
router.put("/:id", updateUser); // Actualizează un utilizator
router.delete("/:id", deleteUser); // Șterge un utilizator

export default router;
