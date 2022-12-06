const express = require("express");
const { addPost,getAllPosts, updatePost, currentPost } = require("../controllers/postControllers");
const isAuth = require("../middleware/isAuth");
const { verifyPost, validator } = require("../middleware/validator");
const router = express.Router();

router.post("/", isAuth, verifyPost, validator, addPost);
router.get("/", getAllPosts);
router.get('/current/:id', isAuth,currentPost)
router.put('/:id',updatePost)
module.exports = router;