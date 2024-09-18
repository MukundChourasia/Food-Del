import mongoose from "mongoose";

export const connectDB = async () =>{
    await  mongoose.connect("mongodb+srv://mukund:6265282821@cluster0.7cujs8i.mongodb.net/food-app2").then(()=>{console.log("DB Connected")});
}

