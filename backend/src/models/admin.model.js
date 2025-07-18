import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApiError } from "../utils/ApiError.js";

const adminSchema = new Schema({
  fullname: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      default: ""
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Optional: normalize email
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Basic security
  },
  role: {
    type: String,
    default: "Admin"
  },
  isActive: {
    type: Boolean,
    default: true
  },
  refreshToken: {
    type: String,
    default: ""
  }
}, {
  timestamps: true
});




// Add some new method to the schema to check security and user status
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


//check password correct or not before login user
adminSchema.methods.isPasswordCorrect = async function (password) {
  if (!password) throw new ApiError(400, "Please enter your password");
  return await bcrypt.compare(password, this.password);
};


//check user Account active or not
adminSchema.methods.isAccountActive = function () {
  return this.isActive
}

//generate AccessToken 
adminSchema.methods.generateAccessToken = function () {

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.fullname.firstname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}


//generate RefreshToken
adminSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}


export const Admin = mongoose.model("Admin", adminSchema);