import imageSchema from "../model/schema/imageSchema.js";

export const deleteImg = async (req, res) => {
    const image = await imageSchema.findOne({ _id: req.params.imageID });

    if (!image) {
        return res.json({
            data: [],
            error: "image ID not found in database",
            messege: "No image found",
        });
    }

    image.deleted = true;
    await image.save();
    res.json({
        data: image,
        error: "",
        messege: "image deleted",
    });
};
