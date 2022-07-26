const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res)=>{
    res.redirect("/index");
})

router.get("/index", (req, res)=>{
    const html = fs.readFileSync(__dirname+"/../../frontend/index.html");
    res.send(html.toString());
})

router.get("/sign-up", (req, res)=>{
    const html = fs.readFileSync(__dirname+"/../../frontend/sign-up.html");
    res.send(html.toString());
})

router.get("/success", (req, res)=>{
    const html = fs.readFileSync(__dirname+"/../../frontend/success.html");
    res.send(html.toString());
})

router.post("/sign-in", (req, res)=>{
    res.redirect("/success");
})

module.exports = router;
