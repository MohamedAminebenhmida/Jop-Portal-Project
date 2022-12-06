const express = require("express");
const { updateProfileImage, updateProfile } = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");
const upload = require("../middleware/upload");
const router = express.Router();

router.patch(
    "/profileimage",
    isAuth,
    upload.single("myImage"),
    updateProfileImage
);
//# update Profile by id
//# method PUT
//# req.params
//# req.body
router.put('/:id',isAuth,updateProfile)

module.exports = router;