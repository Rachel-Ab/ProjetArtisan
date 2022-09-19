import { CategoryModel } from "../Models/Category.js";

export async function getAllCategory(req, res) {
    try {
        const docs = await CategoryModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}
export async function saveCategory(req, res) {
    try {
        const docs = new CategoryModel({
            name: "Armoire",
        });
        const docs2 = new CategoryModel({
            name: "Etagère",
        });
        await docs.save();
        await docs2.save();
        res.status(200).send("Saved !");
    } catch (err) {
        res.status(500).send(err.message);
    }
}
