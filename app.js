const express = require("express");
var faker = require('faker');
var randomName = faker.name.findName();

const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html", {"randomName": randomName});
});

app.get("/frontend", function(req, res){
    res.render("frontend.html", {"randomName": randomName});
});

app.get("/backend", function(req, res){
    res.render("backend.html", {"randomName": randomName});
});

app.get("/database", function(req, res){
    res.render("database.html", {"randomName": randomName});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});