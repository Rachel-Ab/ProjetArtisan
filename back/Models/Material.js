import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MaterialSchema = new Schema({
    name: { type: String, required: true },
    descritpion: { type: String },
    entreprise: { type: String },
    type: { type:  String },
    quantity: { type: Number },
});

export const MaterialModel = model("Material", MaterialSchema);
