import mongoose from "mongoose";

const helperSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "helper"], required: true },
    phone: { type: String, required: true },
    serviceType: { type: String, enum: ["mechanic", "fuel", "tow"], required: true },
    
    location: {
      type: { type: String, enum: ["Point"], required: true, default: "Point" },
      coordinates: { type: [Number], required: true, index: "2dsphere" }
    }
,    

    availability: { type: Boolean, default: true },
    completedJobs: [
      {
        customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        serviceType: { type: String, enum: ["mechanic", "fuel", "tow"], required: true },
        status: { type: String, enum: ["completed", "cancelled"], default: "completed" },
        finalPrice: { type: Number },
        distance: { type: Number },
        completionTime: { type: Date, default: Date.now },
      },
    ],
    totalEarnings: { type: Number, default: 0 },
    ratings: { type: Number, default: 5 },
  },
  { timestamps: true }
);

// Ensure the 2dsphere index is created
helperSchema.index({ location: "2dsphere" });

const Helper = mongoose.models.Helper || mongoose.model("Helper", helperSchema);
export default Helper;
