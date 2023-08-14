const router = require("express").Router();
const User = require("../models/users");
const cloudinary = require("./cloudinary");

// upload image
router.post("/uploads/:userId", async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const { image } = req.body;
    console.log(image);
    try {
        if (image) {
            const uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset: "user-profile"
            });
            if (uploadRes) {
                user.image = uploadRes;
                await user.save();
                return res.status(200).json({ message: "Image uploaded successfully" });
            }
        } else {
            return res.status(400).json({ message: "No image provided" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
    }
})

module.exports = router;
