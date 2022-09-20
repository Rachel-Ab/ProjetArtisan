import { MaterialModel } from "../Models/Material.js";

export async function getAllMaterial(req, res) {
    try {
        const docs = await MaterialModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function getMaterialByName(req, res) {
    const { name } = req.params;
    try {
        const docs = await MaterialModel.find({ name: name });
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function saveMaterial(req, res) {
    try {
        const bois = new MaterialModel({
            name: "frêne",
            descritpion:
                "Le frêne, arbre du genre Fraxinus, appartient à la famille des Oléacées ; une soixantaine d'espèces de frênes sont connues, elles vivent essentiellement dans les forêts tempérées.",
            entreprise: "BBois",
            type: "Bois",
            quantity: 50,
        });
        const bois2 = new MaterialModel({
            name: "noyer",
            descritpion:
                "Les noyers sont un genre d'arbres appartenant à la famille des Juglandacées, originaire des régions tempérées et chaudes principalement de l'hémisphère nord. Selon Pline l'Ancien et d'autres savants, le nom latin Juglans vient de Jovis glans, « gland de Jupiter ». Son fruit est la noix.",
            entreprise: "BBois",
            type: "Bois",
            quantity: 45,
        });
        const bois3 = new MaterialModel({
            name: "chêne",
            descritpion:
                "Chêne est le nom vernaculaire de nombreuses espèces d'arbres et d'arbustes appartenant au genre Quercus, et à certains genres apparentés de la famille des fagacées, notamment Cyclobalanopsis et Lithocarpus.",
            entreprise: "BBois",
            type: "Bois",
            quantity: 32,
        });
        await bois.save();
        await bois2.save();
        await bois3.save();
        const fer = new MaterialModel({
            name: "acier",
            descritpion:
                "Un acier est un alliage métallique constitué principalement de fer et de carbone. C’est essentiellement la teneur en carbone qui confère à l’alliage les propriétés de l'acier. Il existe d’autres alliages à base de fer qui ne sont pas des aciers, comme les fontes et les ferroalliages.",
            entreprise: "MetaLo",
            type: "Fer",
            quantity: 12,
        });
        const fer2 = new MaterialModel({
            name: "inox",
            descritpion:
                "L'acier inoxydable, couramment appelé acier inox ou inox, est un acier (alliage à base de fer et de carbone), comportant moins de 1,2 % de carbone et plus de 10,5 % de chrome, dont la propriété remarquable est d'être peu sensible à la corrosion et de ne pas se dégrader en rouille.",
            entreprise: "MetaLo",
            type: "Fer",
            quantity: 27,
        });
        const fer3 = new MaterialModel({
            name: "aluminum",
            descritpion:
                "L'aluminium est un métal très léger dont la densité spécifique est de 2,7 g/cm3, soit environ un tiers de celle de l'acier (7-8 g/cm3) ou du cuivre (8,96 g/cm3)",
            entreprise: "MetaLo",
            type: "Fer",
            quantity: 35,
        });
        await fer.save();
        await fer2.save();
        await fer3.save();
        const plastique = new MaterialModel({
            name: "plastique",
            descritpion:
                "Une matière plastique est un polymère généralement mélangé à des additifs, colorants, charges.",
            entreprise: "pPlastique",
            type: "Plastique",
            quantity: 35,
        });
        await plastique.save();
        res.status(200).send("Saved !");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function editMaterial(req, res) {
    try {
        const docs = await MaterialModel.findOne({ _id: req.params.id });
        if (req.body.quantity) {
            docs.quantity = req.body.quantity;
        }
        await docs.save();
        res.send(docs);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}
