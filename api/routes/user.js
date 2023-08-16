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


// get user info
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "An error occurred" });
    }
});


// update user info
router.put("/update/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Update user properties based on the updatedData
        if (updatedData.name) user.name = updatedData.name;
        if (updatedData.phone) user.phone = updatedData.phone;
        if (updatedData.email) user.email = updatedData.email;
        if (updatedData.password) user.password = updatedData.password;
        if (updatedData.about) user.about = updatedData.about;
        if (updatedData.skills) user.skills = updatedData.skills;
        if (updatedData.professional) user.professional = updatedData.professional;
        if (updatedData.certifications) user.certifications = updatedData.certifications;
        if (updatedData.experience) user.experience = updatedData.experience;
        if (updatedData.education) user.education = updatedData.education;
        await user.save();
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
});


module.exports = router;
