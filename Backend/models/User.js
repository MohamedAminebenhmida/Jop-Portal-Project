const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {
      username:{
        type:String,required:true
      },
email:{
    type:String,required:true,unique:true
},
password:{
    type:String,required:true
},
imageUrl:String,
occupation:String,
address:String,
phone:Number ,
mobile:Number,
website:String,
github:String,
twitter:String,
instagram:String,
facebook:String
    }
)
module.exports=mongoose.model("User",userSchema)