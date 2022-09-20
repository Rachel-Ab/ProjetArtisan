import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
      email: {
        type : String,
        required: true,
      },
      password: {
        type : String,
        required: true,
      },
      token:{
        type: String
      }
});

export const UserModel = model("Users", UserSchema);
