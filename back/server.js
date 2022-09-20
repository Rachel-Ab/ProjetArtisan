import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import cors from "cors";

dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('trust proxy', 1) // trust first proxy
app.use(
    session({
        name: "register",
        secret: "register",
        resave: true,
        saveUninitialized: true,
        // user: 0,
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "front/Pages")));

mongoose
    .connect("mongodb://localhost:27017/artisan", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(init);

async function init() {
    app.use("/", route);

    app.listen(APP_PORT, () => {
        console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
    });
}
