import express from "express";
import checkAuth from "../middlewares/check-auth.js"; // Middleware pentru autentificare
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js"; // Controlere

const router = express.Router();

// Middleware global pentru toate rutele din acest fisier
router.use(checkAuth);

// Rute
router.post("/", createProduct); // Crearea unui produs nou
router.get("/", getProducts); // Obtinerea tuturor produselor
router.get("/:id", getProductById); // Obținerea unui produs dupa ID
router.put("/:id", updateProduct); // Actualizarea unui produs
router.delete("/:id", deleteProduct); // stergerea unui produs

export default router;
