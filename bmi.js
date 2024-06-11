const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    console.log(request);
    response.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/", function(request, response){

    var num1 = parseFloat(request.body.num1);
    var num2 = parseFloat(request.body.num2);

    var result = (num1 / (num2 * num2) * 703);

    response.send("The BMI result is " + result);
});
app.listen(3000, function(){
    console.log("server started on port 3000");
});
