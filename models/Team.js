import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 50 },

    studentNumber: {
      type: String, 
      required: true,
      match: /^(24|25)\d{2,8}$/,
    },

    year: { type: String, required: true },
    branch: { type: String, required: true },
    section: { type: String, required: true },

    residency: {
      type: String,
      enum: ["Hosteller", "Day Scholar"],
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /\.ac\.in$/,
    },

    mobile: {
      type: String,
      required: true,
      match: /^[6-9]\d{9}$/,
    },
  },
  { _id: false }
);

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
      maxlength: 30,
    },

    teamSize: {
      type: Number,
      required: true,
      enum: [2, 3], 
    },

    leader: {
      type: memberSchema,
      required: true,
    },

    members: {
      type: [memberSchema],
      default: [],   

      validate: {
        validator: function (val) {
          return val.length === this.teamSize - 1;
        },
        message: "Members count must match teamSize",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);