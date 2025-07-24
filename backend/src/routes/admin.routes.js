import { Router } from "express";
import {
  createPost,
  loginAdmin,
  registerAdmin,
  getAllJobs,
  getJobSingleAdmin,
  logOut,
  refreshAccessToken,
} from "../controllers/admin.controller.js";
import { adminVeriFyJwt } from "../middleware/adminVerifyJwt.js";

const router = Router()
//public routs
router.route("/register").post(registerAdmin)
router.route("/get-all-jobs").get(getAllJobs)
router.route("/login").post(loginAdmin)

//protected routs
router.route("/job-post").post(adminVeriFyJwt, createPost)
router.route("/getjob-single-admin").post(adminVeriFyJwt, getJobSingleAdmin)
router.route("/logout").post(adminVeriFyJwt, logOut)
router.route("/refresh-token").post(refreshAccessToken)


export default router