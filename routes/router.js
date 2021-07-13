import express from "express";

// middlewere
import { auth } from "../middlewere/auth.js";
import { imageUpload } from "../middlewere/multer.js";

// user contoller functions
import { login } from "../controller/login.js";
import { signup } from "../controller/signup.js";
import { profile } from "../controller/profile.js";
import { logout } from "../controller/logout.js";

// image controller functions
import { uploadImg } from "../controller/imageupload.js";
import { allImg } from "../controller/allimages.js";
import { myImages } from "../controller/myimages.js";
import { deleteImg } from "../controller/deleteimage.js";
import { updateImg } from "../controller/updateimage.js";

//setting up router
const router = express.Router();

// User routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, profile);
router.get("/logout", auth, logout);

// image routes
router.post("/upload", auth, imageUpload.single("image"), uploadImg);
router.get("/all-images", allImg);
router.get("/my-images", auth, myImages);
router.post("/delete/:imageID", auth, deleteImg);
router.post("/update/:imageID", auth, updateImg);

export default router;
