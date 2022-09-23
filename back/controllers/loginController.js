import { UserModel } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();
const { SECRET_KEY } = process.env;
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const hashPassword = CryptoJS.SHA1(password).toString();
        const admin = await UserModel.findOne({
            email: email,
            password: hashPassword,
        });

        if (admin) {
            const token = jwt.sign(
                {
                    user: admin,
                },
                SECRET_KEY,
                {
                    expiresIn: 24 * 60 * 60,
                }
            );

            res.header("Authorization", "Bearer " + token);
            res.status(200).json({
                status: "success",
                data: true,
                token: token,
            });
        } else {
            res.status(401).json({ status: "success", data: false });
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export const logout = (req, res) => {
    req.session.destroy();
    res.send({ log: 0 });
};

export async function getUser(req, res) {
    try {
        const docs = await UserModel.find({});
        res.status(200).json({ status: "success", data: docs });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}

export async function saveUser(req, res) {
    try {
        const newUser = new UserModel({
            email: "artisan@mail.com",
            password: "artisan24",
        });
        newUser.password = CryptoJS.SHA1(newUser.password).toString();
        tokenDb = jwt.sign(
            {
                user: newUser,
            },
            SECRET_KEY,
            { expiresIn: 24 * 60 * 60 }
        );
        newUser.save().then((user) => {
            res.status(200).send("Saved !");
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
