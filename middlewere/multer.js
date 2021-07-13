import multer from "multer";
import path from "path";

// configure multer
const imageStorage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
});

export const imageUpload = multer({ storage: imageStorage });
