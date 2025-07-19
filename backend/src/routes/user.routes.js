import { Router } from "express";
import { loginUser, logOut, registerUser } from "../controllers/user.controller.js";
import { veriFyJwt } from "../middleware/userVerifyJwt.js";


const router = Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)



router.route("/logout").post(veriFyJwt,logOut)


export default router