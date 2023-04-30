import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userCtrl.js";


//router Object
const router = express.Router();

//Routes
//Login || Post
router.post("/login", loginController);

//Routes
//Register || Post
router.post("/register", registerController);

export default router;
