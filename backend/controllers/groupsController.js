import Group from "../models/group.js"; // Importă modelul Group
import HttpError from "../models/http-error.js"; // Gestionare erori personalizate

// Obține toate grupurile
export const getAllGroups = async (req, res, next) => {
  try {
    const groups = await Group.findAll();
    res.json(groups.map((group) => group.toJSON()));
  } catch (err) {
    next(new HttpError("Fetching groups failed, please try again.", 500));
  }
};

// Obține un grup după ID
export const getGroupById = async (req, res, next) => {
  const groupId = req.params.id;
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return next(new HttpError("Group not found.", 404));
    }
    res.json(group.toJSON());
  } catch (err) {
    next(new HttpError("Something went wrong, please try again.", 500));
  }
};

// Creează un grup nou
export const createGroup = async (req, res, next) => {
  const { id_user_creator, name } = req.body;
  try {
    const newGroup = await Group.create({
      id_user_creator,
      name,
      data_creare: new Date(),
    });
    res.status(201).json(newGroup.toJSON());
  } catch (err) {
    next(new HttpError("Creating group failed, please try again.", 500));
  }
};

// Actualizează un grup
export const updateGroup = async (req, res, next) => {
  const groupId = req.params.id;
  const { name } = req.body;
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return next(new HttpError("Group not found.", 404));
    }
    group.name = name;
    await group.save();
    res.json(group.toJSON());
  } catch (err) {
    next(new HttpError("Updating group failed, please try again.", 500));
  }
};

// Șterge un grup
export const deleteGroup = async (req, res, next) => {
  const groupId = req.params.id;
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return next(new HttpError("Group not found.", 404));
    }
    await group.destroy();
    res.json({ message: "Group deleted successfully." });
  } catch (err) {
    next(new HttpError("Deleting group failed, please try again.", 500));
  }
};
