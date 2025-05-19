const express = require("express");
const app = express();
const session = require("express-session");
const flash = require('connect-flash');
const path = require("path")
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//Web-Cookies

// // app.use(cookieParser());

// //Signed Cookie
// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req,res) => {
//     res.cookie("origin", "India", {signed: true});
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req,res) => {
//     // console.log(req.cookies); // it will print unsigned cookies 
//     console.log(req.signedCookies); // it will print signed cookies 
//     res.send("verified");
// });

// app.get("/getcookies", (req,res) => {
//     res.cookie("greet", "namaste");
//     res.cookie("origin", "India");
//     res.send("sent you some cookies");
// });

// app.get("/greet", (req,res) => {
//     let { name = "anonymous" } = req.cookies;
//     res.send(`Hi, ${name}`);
// });


// app.get("/", (req,res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root!");
// });


// //user.js
// app.use("/users", users);


// //post.js
// app.use("/posts", posts);



// Express-Session 

// app.use(session({ secret : "mysupersecretstrig" ,
//     resave : false,
//     saveUninitialized :true
// }));

// app.get("/reqcount", (req,res) => {
//     if(req.session.count) {
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test", (req,res) =>{
//     res.send("test successful!!!");
// });



const sessionOptions = {
    secret : "mysupersecretstrig" ,
    resave : false,
    saveUninitialized :true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) => {
    res.locals.successMsg = req.flash("success"); 
    res.locals.errorMsg = req.flash("error"); 
    next();   
});

app.get("/register", (req,res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(name==="anonymous"){
        req.flash("error", "some error occurred!");
    }else{
        req.flash("success", "user registered succesfully!");
    }
    res.redirect("/hello");
});


//Flash
// app.get("/hello", (req,res) => {
//     // res.send(`hello, ${req.session.name}`);
//     res.render("page.ejs", {name: req.session.name, msg : req.flash("success")});
// });


// res.locals
app.get("/hello", (req,res) => {
    res.render("page.ejs", {name: req.session.name});
});

app.listen(3000, () => {
    console.log("server is listening to port 3000");
})