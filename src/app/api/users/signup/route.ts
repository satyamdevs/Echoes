import {connect} from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/userModel"
import bcrypt from "bcryptjs";
import toast from "react-hot-toast";
connect();

export async function POST(request: Request) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);
        

        const existingUser = await User.findOne({email})
        if(existingUser){
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
            toast.error("User Already Exists")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        console.log("User created successfully:", savedUser);
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
        toast.success("User created successfully");
    } catch (error) {
        console.error("Error in signup API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        toast.error("User creation failed");
    }
}