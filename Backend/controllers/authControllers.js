const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Signup function
exports.signup=async(req,res)=>{
    const {username,email,password}=req.body
    try {
        const userExist=await User.findOne({email});
        if (userExist){
            return res.status(409).json({errors : [{msg :"user already exists"}]});
        }
        const user=new User({
          username,email,password 
        })
        user.password=await bcrypt.hash(password,10)
        await user.save()
        // generate token
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secretKey,{expiresIn:'3d'});
        res.status(201).json({msg:"user created",user,token})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
//signIn function
exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email});
        if (!user){
            return res.status(409).json({errors : [{msg :"Bad credentials"}]});
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if (!isMatch){
         return res.status(409).json({errors : [{msg :"Bad credentials"}]});   
        }
        // generate token
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secretKey,{expiresIn:'3d'});

        res.status(201).json({msg:"user login with success",user:{username:user.username,email:user.email,_id:user._id},token});
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
// current function
exports.current = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).lean().exec();
        const { password, ...rest } = user;
        res.send(rest);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};