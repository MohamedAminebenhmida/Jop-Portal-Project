const Post = require("../models/Post");

exports.addPost = async (req, res) => {
    const { text,jobType,designation,experience,gender,offeredSalary,qualification,localisation,skills } = req.body;
    try {
        const post = new Post({
            text,
            jobType,
            designation,
            experience,
            gender,
            offeredSalary,
            qualification,
            localisation,
            skills,
            userId: req.user.id,
        });
        await post.save();
        res.status(201).json({ msg: "post created", post });
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
};
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("userId", [
            "username",
            "imageUrl",
        ]);
        res.status(200).json({ msg: "all posts", posts });
    } catch (error) {
        res.status(500).send({ msg: "server error" });
        console.log(error)
    }
};
exports.updatePost =async(req,res) =>{
    const {id}=req.params
    try {
       const updatepost= await Post.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.status(200).json({msg:"Post updated",updatepost})
    } catch (error) {
        res.status(500).send('server error') 
    }
}
// current function
exports.currentPost = async (req, res) => {
    const {id}=req.params
    try {
        const post = await Post.findById(id).lean().exec();
        const { gender, ...rest } = post;
        res.send(rest);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};