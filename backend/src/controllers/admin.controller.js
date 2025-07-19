import mongoose from "mongoose";
import { Admin } from "../models/admin.model.js";
import { JobPost } from "../models/JobPost.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


const generateAccessAndrefreshToken = async (adminId) => {
  const admin = await Admin.findById(adminId)
  if(!admin){
    throw new ApiError(400, 'admin not found')
  }

  
  try {
    const accessToken = await admin.generateAccessToken()
    const refreshToken = await admin.generateRefreshToken()
  
    if(!accessToken && !refreshToken){
      throw new ApiError(400, 'something went wrong while generating access and refresh token')
    }
    
    //save refresh token in admin schema
    admin.refreshToken = refreshToken
    await admin.save({validateBeforeSave: false})
    return {accessToken, refreshToken}
  } catch (error) {
    throw new ApiError(401, 'something went wrong ')
  }
}

const registerAdmin = asyncHandler(async (req, res) => {
  const {fullname, email, password} = req.body
  if([fullname, email, password].some((field) => field==='')){
    throw new ApiError(401, 'All field is required')
  }
  const ExistedAdmin = await Admin.findOne({
    $or: [{email}]
  })
  if(ExistedAdmin){
    throw new ApiError(409, 'Admin Already Existed')
  }

  const createdAdmin = await Admin.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname
    },
    email,
    password,
  })
  if(!createdAdmin){
    throw new ApiError(401, 'something went wrong while creating admin account')
  }
  const admin = await Admin.findById(createdAdmin._id).select("-password -refreshToken")

   return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        admin,
        "admin created successfully"
      )
    )

})

const loginAdmin = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  if(!email && !password){
    throw new ApiError(400, 'all field required')
  }
  const admin = await Admin.findOne({
    $or: [{email}]
  })
  if(!admin){
    throw new ApiError(401, "account not found")
  }
  const isPasswordCorrect = await admin.isPasswordCorrect(password)
  if(!isPasswordCorrect){
    throw new ApiError(401, 'Password is incorrect')
  }
  const loggedInAdmin = await Admin.findById(admin._id).select("-password -refreshToken")
  const {refreshToken, accessToken} = await generateAccessAndrefreshToken(admin._id)
  const options={
    httpOnly: true,
    secure: true,
    sameSite: "Strict"
  }
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          admin: loggedInAdmin,
          refreshToken,
          accessToken
        },
        "login successfully"
      )
    )
})

const createPost = asyncHandler(async (req, res) => {
  const {jobTitle, companyName, salary, role, description, skills, isActive, location } = req.body

  if([jobTitle, companyName, skills].some(field => field==='')){
    throw new ApiError(400, 'some fields are required')
  }

  const createdJob = await JobPost.create({
    jobTitle,
    companyName,
    salary,
    role,
    description,
    skills,
    location,
    isActive,
    owner: req.admin._id
  })
  if(!createdJob){
    throw new ApiError(400, 'something went wrong while creating job')
  }
  return res
  .status(201)
  .json(
    new ApiResponse(
      201,
      createdJob,
      'Job created successfull'
    )
  );

})

const getAllJobs = asyncHandler(async (req, res) => {
  const allJobs = await JobPost.find()
  if(!allJobs){
    throw new ApiError(401, 'something went wrong while finding all jobs')
  }
  return res
  .status(201)
  .json(
    new ApiResponse(
      201,
      {
        totalJobs: allJobs
      },
      'All jobs find success'
    )
  )
})

const getJobSingleAdmin = asyncHandler(async (req, res) => {
  const admin = await req.admin
  if(!admin){
    throw new ApiError(201, 'admin account not found')
  }

  const jobs = await JobPost.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(admin._id)
      }
    },
    {
      $sort: {
        createdAt: -1
      }
    }
  ])
  
  if(!jobs){
    throw new ApiError(401, 'Error while finding jobs')
  }
  return res
  .status(201)
  .json(
    new ApiResponse(
      201,
      jobs,
      'success'
    )
  )
})

const logOut = asyncHandler(async (req, res) => {
  await Admin.findByIdAndUpdate(
    req.admin?._id,
    {
      $unset: {
        refreshToken: 1
      },
    },
    {
      new: true
    }
  )
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "Strict"
  }

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
      new ApiResponse(200, {}, "User logout successfuly")
    )
})

export {
  registerAdmin,
  loginAdmin,
  createPost,
  getAllJobs,
  getJobSingleAdmin,
  logOut
}