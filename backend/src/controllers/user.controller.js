import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const generateAccessAndrefreshToken = async (user_id) => {
  const user = await User.findById(user_id)
 
  
  try {
    if (!user) throw new ApiError(401, "something went wrong While generating Access and RefreshToken");

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.genrateRefreshToken();
   
    //save refreshToken in user
    user.refreshToken = refreshToken

    user.save({ validateBeforeSave: false })
    return { accessToken, refreshToken }
  } catch (error) {
    throw new ApiError(error)
  }
}

const registerUser = asyncHandler(async (req, res) => {
  //destructure data from body
  const { fullname, email, username, password, phone, address, bio, role } = req.body;

  //check for required field
  if ([fullname.firstname, email, username, password].some(field => field === "")) {
    throw new ApiError(400, "All fields are required");
  }

  //check user before create new account don't exist any account in db
  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
  })
  if (existedUser) {
    throw new ApiError(409, "user has already exist")
  }

  //create a new usser
  const createdUser = await User.create({
    fullname,
    email,
    username,
    password,
    phone,
    address,
    bio,
    role,
  })

  if (!createdUser) {
    throw new ApiError(401, "Something went wrong while creating user")
  }
  //remove sensitive information
  const user = await User.findById(createdUser._id).select("-password -refreshToken")

  //return status
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        user,
        "user created successfully"
      )
    )
})

const loginUser = asyncHandler(async (req, res) => {
  
  const { username, email, password } = req.body;
  if (!(username || email)) {
    throw new ApiError(401, "All field required")
  }
  const user = await User.findOne(
    {
      $or: [{ username }, { email }]
    }
  )
  if (!user) throw new ApiError(401, "User not found")

  const isPasswordCorrect = await user.isPasswordCorrect(password)
  if (!isPasswordCorrect) throw new ApiError(401, "Password is incorrect");

  const { accessToken, refreshToken } = await generateAccessAndrefreshToken(user._id)

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
  console.log(loggedInUser);
  
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "Strict"
  };
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          refreshToken,
          accessToken
        },
        "login successfully"
      )
    )
})

export {
  registerUser,
  loginUser,
  generateAccessAndrefreshToken,
}