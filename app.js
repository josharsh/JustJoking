var express=require("express");
const devpun = require("devpun");
var app=express();

app.get("/devjoke",function(req,res){
    thejoke=devpun.random();
    res.render("home.ejs",{"normaljoke":dummyDevJoke,"devjoke":thejoke,"kkjoke":dummyknockjoke
});
}
);
var dummyDevJoke="Why couldn’t the React component understand the joke? a. Because it didn’t get the context.";
var dummyJoke="If two vegans are having an argument, is it still considered beef?";
var dummyknockjoke="Who’s there?Hawaii.Hawaii who?I’m good. Hawaii you?";
var kjoke=require('knock-knock-jokes');

app.get("/normaljoke",function(req,res){
        normaljoke.getRandomDadJoke (function(normaljoke) {
            var thejoke=dummyDevJoke;
            res.render("home.ejs",{"normaljoke":normaljoke,"devjoke":dummyDevJoke,"kkjoke":dummyknockjoke
        });
        });
    });
app.get("/kjoke",function(req,res){
            var thejoke=dummyDevJoke;
            var kkjoke=kjoke();
            res.render("home.ejs",{"kkjoke":kkjoke,"devjoke":dummyDevJoke,"normaljoke":dummyJoke
        });
        });
app.get("/", function(req,res)
{
normaljoke.getRandomDadJoke (function(normaljoke) {
        var thejoke=devpun.random();
        var kkjoke=kjoke();
        res.render("home.ejs",{"normaljoke":normaljoke,"devjoke":thejoke, "kkjoke":kkjoke
    });
      
    });
});
var thejoke=devpun.random();
var normaljoke=require('give-me-a-joke');




    
app.use( express.static( "public" ) );
app.listen(3000,function(){
console.log("App is Running");});
