import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// intialize env vars
import dotenv from "dotenv";
dotenv.config();

// connecting to DB
import mongoinit from "./model/config.js";
mongoinit();

// setting up cors
const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
    maxAge: 3600,
};

// setting up app
const app = express();

// setting options
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//base route
app.get("/", (req, res) => {
    res.send("Hello");
});

// calling up routes
import router from "./routes/router.js";
app.use("/api", router);

// listening
app.listen(process.env.PORT, (req, res) => {
    console.log(`app runnning at http://localhost:${process.env.PORT}`);
});
