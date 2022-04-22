 require("dotenv").config();
 const express=require("express");
 const https=require("https");
 const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req,res){

  res.sendFile(__dirname +"/index.html");

});

app.post("/" ,function(req,res){

//res.send("The tempratur is as follow");

  var query=req.body.cityname;
  var 
  var url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apikey ;


   https.get(url,function(response){

    response.on("data",function(data){
      const wd=JSON.parse(data);
      const temp=wd.main.temp;
      const weatherDescription=wd.weather[0].description
    // response.write(wd);
    res.send("The weather is currently "  + weatherDescription);

    //res.write("The temprature in "+ query + " is " + temp);
    });
  });


});


app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
