import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, required: true },
});

export const CategoryModel = model("Category", CategorySchema);
