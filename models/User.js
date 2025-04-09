import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // ✅ Password is required only if provider is 'credentials'
    password: { 
      type: String, 
      required: function () { return this.provider === "credentials"; } 
    },

    // ✅ Role defaults to "customer"
    role: { type: String, enum: ["customer", "helper"], default: "customer" },

    // ✅ Phone is required only if provider is 'credentials'
    phone: { 
      type: String, 
      required: function () { return this.provider === "credentials"; } 
    },

    location: {
      latitude: { type: Number },
      longitude: { type: Number },
    },

    servicesBooked: [
      {
        serviceType: { type: String, enum: ["mechanic", "fuel", "tow"], required: true },
        helper: { type: mongoose.Schema.Types.ObjectId, ref: "Helper" },
        status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
        estimatedPrice: { type: Number, required: true },
        finalPrice: { type: Number },
        distance: { type: Number }, // in km
        requestTime: { type: Date, default: Date.now },
        completionTime: { type: Date },
      },
    ],

    totalMoneySpent: { type: Number, default: 0 },

    // ✅ Track user signup method
    provider: { type: String, enum: ["credentials", "google"], required: true }, 
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
