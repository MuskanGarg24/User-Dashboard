const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
    name: String,
    issued_by: String,
});

const experienceSchema = new mongoose.Schema({
    role: String,
    job_type: String,
    company: String,
    start: String,
    end: String,
});

const educationSchema = new mongoose.Schema({
    institute_name: String,
    degree_name: String,
    start: String,
    end: String,
    description: String,
});

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        pic: String,
        about: String,
        skills: String,
        professional: String,
        certifications: [certificationSchema],
        experience: [experienceSchema],
        education: [educationSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
