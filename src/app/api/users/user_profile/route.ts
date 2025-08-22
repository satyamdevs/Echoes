import { NextRequest, NextResponse } from "next/server";
import { getDatafromToken } from "@/app/helpers/getDatafromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function GET(request: NextRequest) {
    try {
        const UserId = await getDatafromToken(request);
        const user = await User.findOne({_id: UserId}).select("-password");
        return NextResponse.json({
            message: "User Found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}