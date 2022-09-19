import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/routes.js";
import mongoose from "mongoose";

dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose
    .connect("mongodb://localhost:27017/artisan", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(init);

async function init() {
    app.use("/", route);
}

// app.use('/meubles', routes.meubles)

app.listen(APP_PORT, () => {
    console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
});
