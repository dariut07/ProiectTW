import Product from "../models/product.js"; // Importă modelul Product
import HttpError from "../models/http-error.js"; // Gestionare erori personalizate

// Obține toate produsele
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products.map((product) => product.toJSON()));
  } catch (err) {
    next(new HttpError("Fetching products failed, please try again.", 500));
  }
};

// Obține un produs după ID
export const getProductById = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return next(new HttpError("Product not found.", 404));
    }
    res.json(product.toJSON());
  } catch (err) {
    next(new HttpError("Something went wrong, please try again.", 500));
  }
};

// Creează un produs nou
export const createProduct = async (req, res, next) => {
  const { id_user, nume, categorie_id, cantitate, unitate_masura, data_expirare, status } = req.body;
  try {
    const newProduct = await Product.create({
      id_user,
      nume,
      categorie_id,
      cantitate,
      unitate_masura,
      data_expirare,
      status,
      data_adaugare: new Date(),
    });
    res.status(201).json(newProduct.toJSON());
  } catch (err) {
    next(new HttpError("Creating product failed, please try again.", 500));
  }
};

// Actualizează un produs
export const updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  const { nume, categorie_id, cantitate, unitate_masura, data_expirare, status } = req.body;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return next(new HttpError("Product not found.", 404));
    }
    product.nume = nume;
    product.categorie_id = categorie_id;
    product.cantitate = cantitate;
    product.unitate_masura = unitate_masura;
    product.data_expirare = data_expirare;
    product.status = status;
    await product.save();
    res.json(product.toJSON());
  } catch (err) {
    next(new HttpError("Updating product failed, please try again.", 500));
  }
};

// Șterge un produs
export const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return next(new HttpError("Product not found.", 404));
    }
    await product.destroy();
    res.json({ message: "Product deleted successfully." });
  } catch (err) {
    next(new HttpError("Deleting product failed, please try again.", 500));
  }
};
