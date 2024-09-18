import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
      },
      cartData:{
        type:Object,default:{}
      }
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;