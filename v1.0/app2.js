const express = require("express");

const bodyParser = require("body-parser");

var BlogNames=["Day 1","Day 2"];
var  BlogTexts = ["bejbneojcnejwcnewojincewceewj","fjcnjnbeujneoijcjinejncejbcehgvbjn dcojh sochb eojhwcnoew chew"];
const app = express();
let userNAme = "Adhil";
app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended : true}));


/////////////////////////////////
let posts = [];

app.get("/",function(req,res){
    res.render("List",
    {
        usrname : userNAme,
        posts   : posts
    });


});




///////////////////////////////////////////////////////////////////////////

                app.get("/about", function(req,res){
    
                    res.render("about", {
                        usrname :  userNAme
                      

                       })
                    } );
                    
            app.get("/contactus", function(req,res){
                
                        res.render("contact", {
                            usrname :  userNAme
                           
                           })
                        } );
            app.get("/blogtext", function(req,res){
                
                            res.render("blogtext", {
                                usrname :  userNAme
                               
                               })
                            } );

/////////////////////////////////////////////////////////////////////////

app.post("/blogtext",function(req,res){
 
    const post = {
        title : req.body.text2,
        content : req.body.text3
    };

posts.push(post);


   res.redirect("/");

});

//////////////////////////////



//////////////////////////////////////////////////////////////////////////////
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});