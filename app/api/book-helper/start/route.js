import { connectToDB } from "@/app/lib/db";

import Booking from "@/models/Booking";
import { NextResponse } from "next/server";


export async function POST(req) {

    try {
        await connectToDB();
        const {bookingId, otp} = await req.json();
        const  booking   = Booking.findById(bookingId);
        if(!booking){
            console.log("booking not found in the database by this id");
            return NextResponse.json({success:false  , message:"Booking not Found by this id", status:404});

        }

        if(booking.startOtp === otp){
            booking.wrokStatus = "In-progress";
            
            booking.StartOtp = null;
            await booking.save();
            return NextResponse.json({success:true , message:"OTP matched the workstatus is marked under progress" , status :201});

        }else{
            return NextResponse.json({success:false , message:"OTP did not match please try again later",status: 400});
        }
    } catch (error) {
        console.log("Error verifying otp " , error.message);
        return NextResponse.json({success:false , message:error.message , status :500})
        
    }
    
}