const User = require("../models/User");

exports.updateProfileImage = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $set: { imageUrl: req.file.filename },
        });
        res.send("image uploaded with success");
    } catch (error) {
        res.status(500).json({ msg: "server error" });
    }
};
exports.updateProfile =async(req,res) =>{
    const {id}=req.params
    try {
       const updateprofile= await User.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.status(200).json({msg:"Profile updated",updateprofile})
    } catch (error) {
        res.status(500).send('server error') 
    }
}