import userSchema from "../model/schema/userSchema.js";

export const signup = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.json({
            data: [],
            error: "Please provide both email and password",
        });
    }

    const userObj = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    const user = await userSchema.findOne({ email: userObj.email });
    if (user) {
        return res.json({
            data: [],
            error: "Email found in database.",
            messege: "User already exists",
        });
    }

    await userSchema.create(userObj);
    return res.json({
        data: [userObj],
        error: "",
        messege: "new User Created",
    });
};
