import { TypeModel } from "../Models/Type.js";

export async function getAllType(req, res) {
    try {
        const docs = await TypeModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}
export async function saveType(req, res) {
    try {
        const docs = new TypeModel({
            name: "Bois",
        });
        const docs2 = new TypeModel({
            name: "Fer",
        });
        const docs3 = new TypeModel({
            name: "Plastique",
        });
        await docs.save();
        await docs2.save();
        await docs3.save();
        res.status(200).send("Saved !");
    } catch (err) {
        res.status(500).send(err.message);
    }
}
