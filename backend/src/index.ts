import express from "express";
import router from "./routes";
import db from "./config/database";
import bodyParser from "body-parser";

const app = express();

app.use(express.json())
app.use(router)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

db();

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})