import {connect} from "@/dbConfig/dbConfig";
import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwttoken from "jsonwebtoken";
import { toast } from "react-hot-toast";
connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Find user by email
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        const validpassword = await bcrypt.compare(password, user.password);
        if (!validpassword) {
            toast.error("Incorrect Password");
            return NextResponse.json({ error: "Incorrect Password" }, { status: 400 });
        }
        const tokendata = {
            id: user._id,
            email: user.email,
            username: user.username
        };
        const token = await jwttoken.sign(
            tokendata,
            process.env.TOKEN_SECRET!,
            { expiresIn: "1d" }
        );
        const responseData = NextResponse.json({
            message: "Login successful",
            success: true
        }, { status: 200 });
        responseData.cookies.set('token', token, {
            httpOnly: true
        });
        return responseData;
    } catch (error) {
        console.error("Error in login API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}