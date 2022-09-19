import mongoose from "mongoose";
const { Schema, model } = mongoose;

const EntrepriseSchema = new Schema({
    name: { type: String, required: true },
    mail: { type: String },
});

export const EntrepriseModel = model("Entreprise", EntrepriseSchema);
