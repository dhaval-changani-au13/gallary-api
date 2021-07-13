import mongoose from "mongoose";

const mongoinit = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/signupLogin", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to database.");
    } catch (error) {
        console.log(error);
    }
};

export default mongoinit;
