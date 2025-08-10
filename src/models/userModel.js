import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    forgotPasswordToken: {
        type: String,
        default: null,
    },
    forgotPasswordExpiry: {
        type: Date,
        default: null,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        default: null,
    },
    verificationExpiry: {
        type: Date,
        default: null,
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default  User;