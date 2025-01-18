import User from "../models/user.js"; // Importă modelul User
import HttpError from "../models/http-error.js"; // Gestionare erori personalizate

// Obține toți utilizatorii
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users.map((user) => user.toJSON()));
  } catch (err) {
    next(new HttpError("Fetching users failed, please try again.", 500));
  }
};

// Obține un utilizator după ID
export const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return next(new HttpError("User not found.", 404));
    }
    res.json(user.toJSON());
  } catch (err) {
    next(new HttpError("Something went wrong, please try again.", 500));
  }
};

// Creează un utilizator nou
export const createUser = async (req, res, next) => {
  const { nume, email, parola } = req.body;
  try {
    const newUser = await User.create({
      nume,
      email,
      parola,
      data_creare_cont: new Date(),
    });
    res.status(201).json(newUser.toJSON());
  } catch (err) {
    next(new HttpError("Creating user failed, please try again.", 500));
  }
};

// Actualizează un utilizator
export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const { nume, email, parola } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return next(new HttpError("User not found.", 404));
    }
    user.nume = nume;
    user.email = email;
    user.parola = parola;
    await user.save();
    res.json(user.toJSON());
  } catch (err) {
    next(new HttpError("Updating user failed, please try again.", 500));
  }
};

// Șterge un utilizator
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return next(new HttpError("User not found.", 404));
    }
    await user.destroy();
    res.json({ message: "User deleted successfully." });
  } catch (err) {
    next(new HttpError("Deleting user failed, please try again.", 500));
  }
};
