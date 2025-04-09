
import mongoose ,{Schema} from "mongoose";

const bookingSchema = new Schema({
    userId: { type: String, required: true },
    helperId: { type: String, required: true },
    issueDescription: String,
    location: String,
    userOtp: String,   // For user confirmation
    startOtp: String,  // For starting ride by helper
  
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  
    workStatus: {
      type: String,
      enum: ["not-started", "in-progress", "completed"],
      default: "not-started",
    },
  
    createdAt: { type: Date, default: Date.now },
  });

  const Booking  = mongoose.models.Booking|| mongoose.model("Booking",bookingSchema)
  export default Booking;