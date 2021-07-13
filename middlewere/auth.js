import jsonwebtoken from "jsonwebtoken";
import userSchema from "../model/schema/userSchema.js";

import dotenv from "dotenv";
dotenv.config();

export const auth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.json({
                data: [],
                error: "No token inside cookie",
                messege: "Cookie not found",
            });
        }

        const { logintoken } = jsonwebtoken.verify(token, process.env.SECRETKEY);

        const user = await userSchema.findOne({ email: logintoken });
        if (!user) {
            return res.status(400).json({
                data: {},
                errors: [],
                message: "Not a valid user!",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
    }
};
