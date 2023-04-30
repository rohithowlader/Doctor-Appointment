import userModel from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



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
            success:true,
            message:"Registered User Successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({sucess:false, message:`Register Controller ${error.message}`})
        
    }


};
const loginController = async (req,res) =>{
    try {

        const user= await userModel.findOne({email:req.body.email})
        console.log()
        if(!user)
        {
            return res.status(200).send({success:false, message:`User Not Found`})
        }
        const isMatch= await bcrypt.compare(req.body.password,user.password)
        if(!isMatch)
        {
            return res.status(200).send({success:false, message:`Invalid Email or password`})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        return res.status(200).send({success:true, message:`Login Successful`, token})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:`Login Controller ${error.message}`})
        
    }
};

export {loginController,registerController};