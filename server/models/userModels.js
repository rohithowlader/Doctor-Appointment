import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    requied: [true,'name is required']
  },
  email: {
    type: String,
    requied: [true,'email is required']
  },
  password: {
    type: String,
    requied: [true,'email is required'],
  },
},{timestamps:true});
const userModel = mongoose.model("users", userSchema);
export default userModel;