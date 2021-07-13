import cloudinary from "cloudinary";
const cloud = cloudinary.v2;

import dotenv from "dotenv";
dotenv.config();

import imageSchema from "../model/schema/imageSchema.js";

cloud.config({
    cloud_name: process.env.CLUUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
    secure: true,
});

export const uploadImg = async (req, res) => {
    try {
        const fileStr = req.file.path;
        const uploadResponse = await cloud.uploader.upload(fileStr, {});

        const uploadedImage = {
            userID: req.user._id,
            title: req.body.title,
            description: req.body.description,
            image_by: req.user.name,
            is_private: req.body.is_private == "true" ? true : false,
            deleted: false,
            path: uploadResponse.url,
        };
        const image = await imageSchema.create(uploadedImage);
        return res.json({
            data: image,
            error: "",
            messege: "Image Uploaded",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Something went wrong" });
    }
};
