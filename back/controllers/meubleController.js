import { MeubleModel } from "../Models/Meuble.js";

export async function getAll(req, res) {
    try {
        const docs = await MeubleModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getByName(req, res) {
    const { name } = req.params;
    try {
        const docs = await MeubleModel.find({ name: name });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getByCategory(req, res) {
    const { category } = req.params;
    try {
        const docs = await MeubleModel.find({ category: category });
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

export async function create(req, res) {
    try {
        const doc = new MeubleModel({
            name: req.body.name,
            quantity: req.body.quantity,
            materials: req.body.materials,
            category: req.body.category,
        });
        await doc.save();
        res.send(doc);
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}

export async function editMeuble(req, res) {
    try {
        const docs = await MeubleModel.findOne({ _id: req.params.id });
        if (req.body.quantity) {
            docs.quantity = req.body.quantity;
        }
        await docs.save();
        res.send(docs);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function destroy(req, res) {
    try {
        await MeubleModel.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}
