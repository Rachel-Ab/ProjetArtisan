import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TypeSchema = new Schema({
    name: { type: String, required: true },
});

export const TypeModel = model("Type", TypeSchema);
