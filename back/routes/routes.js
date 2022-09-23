import express from "express";
import {
    getAllCategory,
    saveCategory,
} from "../controllers/categoryController.js";
import {
    getAllEntreprise,
    saveEntreprise,
} from "../controllers/entrepriseController.js";
import { login, saveUser } from "../controllers/loginController.js";
import {
    editMaterial,
    getAllMaterial,
    getMaterialByName,
    saveMaterial,
} from "../controllers/materialController.js";
import {
    create,
    destroy,
    editMeuble,
    getAll,
    getByCategory,
    getByName,
    save,
} from "../controllers/meubleController.js";
import { getAllType, saveType } from "../controllers/typeController.js";
import { checkAuth } from "../middleware/checkAuth.js";
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
router.get("/user/save", saveUser);
router.get("/api/meuble/all", getAll);
router.get("/api/meuble/:name", getByName);
router.get("/api/meuble/category/:category", getByCategory);
router.post("/api/meuble/post",checkAuth, create);
router.patch("/api/meuble/edit/:id", editMeuble);
router.delete("/api/meuble/delete/:id", destroy);
router.get("/api/type/all", getAllType);
router.get("/api/material/all", getAllMaterial);
router.get("/api/material/:name", getMaterialByName);
router.patch("/api/material/edit/:id", editMaterial);
router.get("/api/category/all", getAllCategory);
router.get("/api/entreprise/all", getAllEntreprise);

router.post("/api/user", login);

export default router;
