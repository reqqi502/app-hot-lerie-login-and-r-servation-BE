var path = require("path");
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());
app.use(bodyParser.json());



var publicpath= path.join(__dirname,"Public");
app.use(express.static(path.join(publicpath)));
var routetables = require('./Routes/tables');
var routeajoutetable = require('./Routes/ajoutetable');
var routelog = require('./Routes/log');
var routeajoutelogdata = require('./Routes/ajoutelogdata');
const {response} = require("express");

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 

//  app.use(express.static('Public'))
app.use(routetables);
app.use(routeajoutetable);
app.use(routelog);
app.use(routeajoutelogdata);



                                      app.post('/signin', (req, res) => {
                                            
                                            if (res){
                                            res.redirect('/index.html');
                                            };
                                            });

                                     app.get('/',function(req,res){
                                       res.sendFile(__dirname + '/public/index.html');
                                     });

                                     app.get('/table',function(req,res){
                                      res.sendFile(__dirname + '/table.json');
                                    });

                                     app.get('/reservations',function(req,res){
                                      res.sendFile(__dirname +'/public/reservations.html');
                                    });

                                    
                                    app.post('/login',urlencodedParser ,function(req,res){
                                        var emails = req.body.email;
                                            passwords =req.body.password;
                                                console.log(emails);
                                                console.log(passwords);
                                        
                                                fs.readFile('login.json', 'utf8', (err,data) => {     
                                                  var data = JSON.parse(data);

                                               var i;
                                               for( i=0 ; i < data.length ; i++){
                                                 console.log(data[i].email);
                                                 console.log(data[i].password);
    
                                                  if(data[i].email== emails && data[i].password == passwords){
                                                  
                                                    //object : mol return 
                                                    return res.redirect("reservations.html");
                                                    
  
                                                  }else{
                                                      console.log('error oooooooops !!!');
                                                  }
                                                  }
                                                  })
                                                });
                                                
                                                 
                                              
                                   
                                      
                                                                                                  // Send Data to file json 

app.listen(3000,()=>{
    console.log("app is listning");
});


