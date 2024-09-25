const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true
        }
    }
)
const user=mongoose.model("users",userSchema)
module.exports=user;