const express = require("express");
const lodash = require('lodash');
const bodyParser = require("body-parser");


const app = express();
let userNAme = "";
app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended : true}));


/////////////////////////////////
let posts = [];

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){

    const uname = req.body.text1;
    userNAme = uname ;
    res.redirect("/home");

})
///////////////////////////////////////////////////////////////////////////
app.get("/home",function(req,res){

   
    res.render("List",
    {
        usrname : userNAme,
        posts   : posts,
        
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


   res.redirect("/home");

});

//////////////////////////////
app.get("/home/:postName",function(req,res){

    let Rtname = lodash.lowerCase(req.params.postName) ;

    posts.forEach(function(post){
        
          
        let ptitle =lodash.lowerCase(post.title );
      
        if( Rtname  == ptitle )
        {
           res.render("post",{
            usrname :  userNAme,
             posttitle : ptitle,
             postcontent : post.content
           })
        }
       
    })
       
        
   
  
    
});



//////////////////////////////////////////////////////////////////////////////
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});