import { Router } from "express";
import { createPost, loginAdmin, registerAdmin, getAllJobs } from "../controllers/admin.controller.js";
import { adminVeriFyJwt } from "../middleware/adminVerifyJwt.js";

const router = Router()

router.route("/register").post(registerAdmin)
router.route("/login").post(loginAdmin)


router.route("/job-post").post(adminVeriFyJwt, createPost)
router.route("/get-all-jobs").get(getAllJobs)
export  default router