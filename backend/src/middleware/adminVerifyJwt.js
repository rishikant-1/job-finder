import asyncHandler from "../utils/asyncHandler.js";
import {Admin} from '../models/admin.model.js'
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

export const adminVeriFyJwt = asyncHandler( async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
    if(!token){
      throw new ApiError(401, "UnAuthorized Request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  
    const admin = await Admin.findById(decodedToken?._id).select("-password -refreshToken");
  
    if(!admin){
      
      throw new ApiError(401, "Invalid access Token");
    }
    req.admin = admin;

    next()
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access token")
  }
})