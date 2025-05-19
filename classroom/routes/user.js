const express = require("express");
const router = express.Router();

//Index Route - users
router.get("/", (req,res) => {
    res.send("GET for users");
});

//Show Route - users
router.get("/:id", (req,res) => {
    res.send("GET for show users");
});


//Post Route - users
router.post("/", (req,res) => {
    res.send("POST for  users");
});

//Delete Route -users
router.delete("/:id", (req,res) => {
    res.send("DELETE for users");
});

module.exports = router;