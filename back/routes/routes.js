import express from "express";
import {
    getAllCategory,
    saveCategory,
} from "../controllers/categoryController.js";
import {
    getAllEntreprise,
    saveEntreprise,
} from "../controllers/entrepriseController.js";
import {
    editMaterial,
    getAllMaterial,
    getMaterialByName,
    saveMaterial,
} from "../controllers/materialController.js";
import {
    create,
    destroy,
    getAll,
    getByCategory,
    getByName,
    save,
} from "../controllers/meubleController.js";
import { getAllType, saveType } from "../controllers/typeController.js";
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
router.get("/meuble/:name", getByName);
router.get("/meuble/category/:category", getByCategory);
router.post("/meuble/post", create);
router.delete("/meuble/delete/:id", destroy);
router.get("/type/all", getAllType);
router.get("/material/all", getAllMaterial);
router.get("/material/:name", getMaterialByName);
router.patch("/material/edit/:id", editMaterial);
router.get("/category/all", getAllCategory);
router.get("/entreprise/all", getAllEntreprise);

export default router;
