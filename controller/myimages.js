import imageSchema from "../model/schema/imageSchema.js";

export const myImages = async (req, res) => {
    const allImages = await imageSchema.find({ userID: req.user._id, deleted: false });
    res.json({
        data: allImages,
        error: "",
        messege: "user iamges",
    });
};
