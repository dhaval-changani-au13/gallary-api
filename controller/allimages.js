import imageSchema from "../model/schema/imageSchema.js";

export const allImg = async (req, res) => {
    const allImages = await imageSchema.find({ is_private: false, deleted: false });
    res.json({
        data: allImages,
        error: "",
        messege: "all images found",
    });
};
