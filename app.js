const app = require("express")();

const http = require("http").Server(app);
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/realtimeapp");




app.get('/', (req, res)=>{


    res.send('welcome');
});





http.listen(3000, function(){

    console.log("server is runing");
});
