const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(8080, ()=>{
    console.log("listening on 8080");
})



