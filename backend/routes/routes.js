const express = require("express");
const router = express.Router();
const fs = require("fs");
const usermanager = require("./../models/usermanager");

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
    if(usermanager.checkPasswordandUsername(req.body.username, req.body.password)){
        res.redirect("/success");
    }else{
        res.redirect("/index");
    }
})

router.post("/adduser", (req, res)=>{
    if(!usermanager.checkTheList(req.body.username)){
        usermanager.addUser(req.body.username, req.body.password);
        res.redirect("/success");
    }else{
        res.redirect("/sign-up");
    }
})


module.exports = router;
