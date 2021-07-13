import userSchema from "../model/schema/userSchema.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.json({
            data: [],
            error: "Please provide both email and password",
        });
    }

    const user = await userSchema.findOne({ email: req.body.email });
    if (!user) {
        return res.json({
            data: [],
            error: "Email not found in database",
            messege: "User does not exists",
        });
    }

    const token = jsonwebtoken.sign({ logintoken: req.body.email }, process.env.SECRETKEY);
    res.cookie("token", token, {
        httpOnly: false,
        maxAge: 3600000 * 5,
        secure: true,
        sameSite: "none",
    });
    return res.json({
        data: [user],
        error: "",
        messege: "User Logged In",
    });
};
