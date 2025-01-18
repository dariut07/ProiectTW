import express from "express";
import checkAuth from "../middlewares/check-auth.js";
import {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notificationsController.js";

const router = express.Router();

// Middleware global pentru autentificare
router.use(checkAuth);

// Rute CRUD pentru notificări
router.get("/", getAllNotifications); // Obține toate notificările
router.get("/:id", getNotificationById); // Obține o notificare după ID
router.post("/", createNotification); // Creează o nouă notificare
router.put("/:id", updateNotification); // Actualizează o notificare
router.delete("/:id", deleteNotification); // Șterge o notificare

export default router;
