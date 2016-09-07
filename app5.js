
var express = require("express");
var path = require("path");
var app = express();
var filePath = path.join(__dirname, "celine.jpg");
app.use(function(req, res, next) {
 res.sendFile(filePath, function(err) {
 if (err) {
 next(new Error("Error al enviar  file!"));
 }
 });
});

app.listen(3000, function() {
 console.log("App started on port 3000");
});