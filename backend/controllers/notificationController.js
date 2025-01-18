import Notification from "../models/notification.js"; // Importă modelul Notification
import HttpError from "../models/http-error.js"; // Gestionare erori personalizate

// obtine toate notificarile
export const getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications.map((notif) => notif.toJSON()));
  } catch (err) {
    next(new HttpError("Fetching notifications failed, please try again.", 500));
  }
};

// Obține o notificare după ID
export const getNotificationById = async (req, res, next) => {
  const notificationId = req.params.id;
  try {
    const notification = await Notification.findByPk(notificationId);
    if (!notification) {
      return next(new HttpError("Notification not found.", 404));
    }
    res.json(notification.toJSON());
  } catch (err) {
    next(new HttpError("Something went wrong, please try again.", 500));
  }
};

// Creează o nouă notificare
export const createNotification = async (req, res, next) => {
  const { id_user, mesaj, status } = req.body;
  try {
    const newNotification = await Notification.create({
      id_user,
      mesaj,
      data_primire: new Date(),
      status,
    });
    res.status(201).json(newNotification.toJSON());
  } catch (err) {
    next(new HttpError("Creating notification failed, please try again.", 500));
  }
};

// Actualizează o notificare
export const updateNotification = async (req, res, next) => {
  const notificationId = req.params.id;
  const { mesaj, status } = req.body;
  try {
    const notification = await Notification.findByPk(notificationId);
    if (!notification) {
      return next(new HttpError("Notification not found.", 404));
    }
    notification.mesaj = mesaj;
    notification.status = status;
    await notification.save();
    res.json(notification.toJSON());
  } catch (err) {
    next(new HttpError("Updating notification failed, please try again.", 500));
  }
};

// Șterge o notificare
export const deleteNotification = async (req, res, next) => {
  const notificationId = req.params.id;
  try {
    const notification = await Notification.findByPk(notificationId);
    if (!notification) {
      return next(new HttpError("Notification not found.", 404));
    }
    await notification.destroy();
    res.json({ message: "Notification deleted successfully." });
  } catch (err) {
    next(new HttpError("Deleting notification failed, please try again.", 500));
  }
};
