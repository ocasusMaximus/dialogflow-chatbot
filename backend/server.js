import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Agent from "./agent";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/agent", Agent);

app.listen(PORT, () => console.log(`🔥  server running on port ${PORT}`));
