import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ApiError } from "../utils/ApiError.js";

const userSchema = new Schema({
  fullname: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
    }
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowerCase: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, // Password should be hashed before saving
  phone: {
    type: String,
    default: ""
  }, // Optional phone number
  address: {
    type: String,
    default: ""
  }, // Optional address
  bio: {
    type: String,
    default: ""
  },
  role: {
    type: String,
    default: "user"
  }, // Default role is 'user'
  isActive: {
    type: Boolean,
    default: true
  }, // Indicates if the user is 
  refreshToken: {
    type: String,
  }
},
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);




// Add some new method to the schema to check security and user status
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next()
})

//check password correct or not before login user
userSchema.methods.isPasswordCorrect = async function (password) {
  if (!password) {
    throw new ApiError("Please enter your password")
  }
  return await bcrypt.compare(password, this.password)
}

//check user Account active or not
userSchema.methods.isAccountActive = function () {
  return this.isActive
}

//generate AccessToken 
userSchema.methods.generateAccessToken = async function () {
  
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.fullname.firstname,
      username: this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}


//generate RefreshToken
userSchema.methods.genrateRefreshToken = async function () {
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


export const User = mongoose.model("User", userSchema);