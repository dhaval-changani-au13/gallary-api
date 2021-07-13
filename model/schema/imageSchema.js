import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        image_by: {
            type: String,
            required: true,
        },
        is_private: {
            type: Boolean,
            required: true,
        },
        deleted: {
            type: Boolean,
            required: true,
        },
        path: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("image", imageSchema);
