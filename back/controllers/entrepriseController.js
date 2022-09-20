import { EntrepriseModel } from "../Models/Entreprise.js";

export async function getAllEntreprise(req, res) {
    try {
        const docs = await EntrepriseModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}
export async function saveEntreprise(req, res) {
    try {
        const docs = new EntrepriseModel({
            name: "BBois",
            mail: "bbois@mail.com"
        });
        const docs2 = new EntrepriseModel({
            name: "MetaLo",
            mail: "metalo@mail.com"
        });
        const docs3 = new EntrepriseModel({
            name: "pPlastique",
            mail: "pplastique@mail.com"
        });
        await docs.save();
        await docs2.save();
        await docs3.save();
        res.status(200).send("Saved !");
    } catch (err) {
        res.status(500).send(err.message);
    }
}