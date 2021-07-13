import mongoose from "mongoose";

// setting up mongo URI
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO_URI;

const mongoinit = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to database.");
    } catch (error) {
        console.log(error);
    }
};

export default mongoinit;
