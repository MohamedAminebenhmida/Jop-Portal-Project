const express=require('express');
const { signup, signIn, current } = require('../controllers/authControllers');
const isAuth = require('../middleware/isAuth');
const { registerRules,validator, loginRules } = require('../middleware/validator');
const router=express.Router();

//@desc sign up create new user
//@route post / signup
//@access public

router.post('/signup',registerRules,validator,signup)
//@desc sign in 
//@route post / signin
//@access public
router.post('/signin',loginRules,validator,signIn)
//@desc get current user
//@route get / current
//@access private
router.get('/current',isAuth,current)
module.exports =router;