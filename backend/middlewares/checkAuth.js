import jwt from "jsonwebtoken";
import HttpError from "../models/http-error.js";

const checkAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new HttpError("Authentication failed!", 401));
  }

  const token = authHeader.split(" ")[1]; // Extrage token-ul din "Bearer <token>"
  if (!token) {
    return next(new HttpError("Authentication failed!", 401));
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Decodează token-ul
    req.userData = { userId: decodedToken.userId, role: decodedToken.role }; // Adaugă datele utilizatorului în req
    next(); // Permite accesul la ruta
  } catch (err) {
    return next(new HttpError("Authentication failed!", 401));
  }
};

export default checkAuth;
