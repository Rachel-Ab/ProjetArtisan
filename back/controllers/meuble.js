import { MeubleModel } from "../Models/Meuble.js";

export async function getAll(req, res) {
    try {
        const docs = await MeubleModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}
export async function save(req, res) {
    try {
        const docs = new MeubleModel({
            name: "meuble 1",
            quantity: 3,
            materials: [
                { name: "noyer", qty_needed: 7 },
                { name: "acier", qty_needed: 3 },
            ],
            category: "Armoire",
        });
        const docs2 = new MeubleModel({
            name: "meuble 2",
            quantity: 5,
            materials: [{ name: "frêne", qty_needed: 15 }],
            category: "Armoire",
        });
        const docs3 = new MeubleModel({
            name: "meuble 3",
            quantity: 1,
            materials: [
                { name: "chêne", qty_needed: 20 },
                { name: "inox", qty_needed: 5 },
                { name: "plastique", qty_needed: 2 },
            ],
            category: "Etagère",
        });
        await docs.save();
        await docs2.save();
        await docs3.save();
        res.status(200).send("Saved !");
    } catch (err) {
        res.status(500).send(err.message);
    }
}
