import imageSchema from "../model/schema/imageSchema.js";

export const updateImg = async (req, res) => {
    const image = await imageSchema.findOne({ _id: req.params.imageID });

    if (!image) {
        return res.json({
            data: [],
            error: "image ID not found in database",
            messege: "No Image found",
        });
    }

    if (req.body.title) {
        image.title = req.body.title;
    }

    if (req.body.description) {
        image.description = req.body.description;
    }

    if (req.body.is_private) {
        image.is_private = req.body.is_private;
    }

    await image.save();
    res.json({
        data: image,
        error: "",
        messege: "iamge updated",
    });
};
