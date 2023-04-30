import userModel from "../models/userModels.js";
import bcrypt from "bcryptjs";


//register Callback
const registerController = async (req,res) =>{

    try {
        const existingUser=await userModel.findOne({email:req.body.email})
        if(existingUser)
        {
            return res.status(200).send({message:'User Already Exists',sucess:false})
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)
        req.body.password=hashedPassword;
        const newUser= new userModel(req.body)
        await newUser.save();
        
        res.status(201).send({
            sucess:true,
            message:"Registered User Successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({sucess:false, message:`Register Controller ${error.message}`})
        
    }


};
const loginController = () =>{};

export {loginController,registerController};