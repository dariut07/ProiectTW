import Claim from "../models/claim.js"; // Importă modelul Claim
import HttpError from "../models/http-error.js"; // Gestionare erori personalizate

// Obține toate cererile
export const getAllClaims = async (req, res, next) => {
  try {
    const claims = await Claim.findAll();
    res.json(claims.map((claim) => claim.toJSON()));
  } catch (err) {
    next(new HttpError("Fetching claims failed, please try again.", 500));
  }
};

// Obține o cerere după ID
export const getClaimById = async (req, res, next) => {
  const claimId = req.params.id;
  try {
    const claim = await Claim.findByPk(claimId);
    if (!claim) {
      return next(new HttpError("Claim not found.", 404));
    }
    res.json(claim.toJSON());
  } catch (err) {
    next(new HttpError("Something went wrong, please try again.", 500));
  }
};

// Creează o nouă cerere
export const createClaim = async (req, res, next) => {
  const { id_produs, id_claimer } = req.body;
  try {
    const newClaim = await Claim.create({
      id_produs,
      id_claimer,
      data_cererii: new Date(),
    });
    res.status(201).json(newClaim.toJSON());
  } catch (err) {
    next(new HttpError("Creating claim failed, please try again.", 500));
  }
};

// Actualizează o cerere
export const updateClaim = async (req, res, next) => {
  const claimId = req.params.id;
  const { id_produs, id_claimer } = req.body;
  try {
    const claim = await Claim.findByPk(claimId);
    if (!claim) {
      return next(new HttpError("Claim not found.", 404));
    }
    claim.id_produs = id_produs;
    claim.id_claimer = id_claimer;
    await claim.save();
    res.json(claim.toJSON());
  } catch (err) {
    next(new HttpError("Updating claim failed, please try again.", 500));
  }
};

// Șterge o cerere
export const deleteClaim = async (req, res, next) => {
  const claimId = req.params.id;
  try {
    const claim = await Claim.findByPk(claimId);
    if (!claim) {
      return next(new HttpError("Claim not found.", 404));
    }
    await claim.destroy();
    res.json({ message: "Claim deleted successfully." });
  } catch (err) {
    next(new HttpError("Deleting claim failed, please try again.", 500));
  }
};
