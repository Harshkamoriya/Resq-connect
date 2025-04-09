import { connectToDB } from "@/lib/db";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";
import { sendEmailOTP } from "@/lib/mailer"; // <- new

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, helperId, issueDescription, location,email} = body;

    await connectToDB();

    const userOtp = Math.floor(1000 + Math.random() * 9000).toString();
    const startOtp = Math.floor(1000 + Math.random() * 9000).toString();

    const booking = await Booking.create({
      userId,
      helperId,
      issueDescription,
      location,
      userOtp,
      startOtp,
    });


    await sendEmailOTP(email, userOtp); // sending OTP via email

    return NextResponse.json({
      success: true,
      message: "OTP sent to your email",
      bookingId: booking._id,
    });
  } catch (error) {
    console.error("Error booking helper and sending OTP:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
