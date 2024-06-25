require('dotenv').config()
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import db from './config/database'
import cors from 'cors';

const app = express();

app.use(express.json())

db();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes);

app.listen(3000, () => {
    console.log(`Server is running at 3000`);
})