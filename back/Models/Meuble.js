import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MeubleSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    materials: [{ name: { type: String }, qty_needed: { type: Number } }],
    category: { type: String },
});

export const MeubleModel = model("Meuble", MeubleSchema);
