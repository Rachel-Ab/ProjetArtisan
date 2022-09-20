import { UserModel } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

export async function login(req, res) {
    try {
        req.session.user = 0;
        const { email, password } = req.body;
        const hashPassword = CryptoJS.SHA1(password).toString();
        const admin = await UserModel.findOne({
            email: email,
            password: hashPassword,
        });

        if (admin) {
            req.session.user = 1;
            // console.log("logged");
            res.status(200).json({ status: "success", data: true });
        } else {
            req.session.user = 0;
            res.status(401).json({ status: "success", data: false });
        }
        // if (admin.password == hashPassword) {
        //     console.log("logged");
        //     req.session.user = 1;
        //     // res.json({ log: 1, pass: admin.password, other: hashPassword });
        // } else {
        //     // res.json({ log: admin.password, other: hashPassword });
        //     console.log("wrong email or password");
        //     req.session.user = 0;
        // }
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
        newUser.save().then((user) => {
            res.status(200).send("Saved !");
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
