const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");



// Router.route()


//Router for SignUp

router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signup));



//Router for Login

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local" , {failureRedirect: '/login', failureFlash: true}),
    userController.login);




//Router for logout 
router.get("/logout",userController.logout);




// // Router for Signup (New User Creation)
// router.get("/signup", userController.renderSignUpForm);


// //Route for Render SignUp Form
// router.post("/signup", wrapAsync(userController.signup));



// //Router for Login
// router.get("/login", userController.renderLoginForm);


// //Router for Login Authentication
// router.post("/login",
//     saveRedirectUrl, passport.authenticate("local" , {failureRedirect: '/login', failureFlash: true}),
//     userController.login);




module.exports = router;
