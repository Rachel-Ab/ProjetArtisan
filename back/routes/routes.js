import express from "express";
import { getAllCategory, saveCategory } from "../controllers/category.js";
import { getAllEntreprise, saveEntreprise } from "../controllers/entreprise.js";
import { getAllMaterial, saveMaterial } from "../controllers/material.js";
import { getAll, save } from "../controllers/meuble.js";
import { getAllType, saveType } from "../controllers/type.js";
const router = express.Router();

// ==========
// BDD Creation
// ==========
/*
router.get("/type/save", saveType);
router.get("/entreprise/save", saveEntreprise);
router.get("/material/save", saveMaterial);
router.get("/category/save", saveCategory);
router.get("/meuble/save", save);
*/



router.get("/meuble/all", getAll);
router.get("/type/all", getAllType);
router.get("/material/all", getAllMaterial);
router.get("/category/all", getAllCategory);
router.get("/entreprise/all", getAllEntreprise);

export default router;