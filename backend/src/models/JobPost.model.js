import mongoose, { Schema } from "mongoose";

const jobPostSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    default: ""
  },
  jobType: {
    type: String,
    default: "Full-time"
  },
  description: {
    type: String,
    default: ""
  },
  skills: [{
    type: String,
    required: true
  }],
  location: {
    type: String,
    required: true
  },
  isActive: {
    type: String,
    enum: ["active", "close"],
    default: "active",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
}, {
  timestamps: true
});

// Optional: Utility method to check job status
jobPostSchema.methods.isJobActive = function () {
  return this.isActive === "active";
};

export const JobPost = mongoose.model("JobPost", jobPostSchema);
