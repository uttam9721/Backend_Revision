// const express = require('express');
// const app = express();



// app.use((req, res, next)=> {
//     console.log('hii uttam');
//     next();
// })


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })
// app.get('/profile', (req, res) => {
//     res.send('Hello profile!');
//     // return next(new Error("something went wrong"));
// })
// app.use((err,req,res,next)=>{
//     console.log(err.stack);
//     res.status(500).send("something broke !");
// })
// app.listen(3000,()=>{
//     console.log('server is running on port 3000');
// });




// const express = require('express');
// const app = express(); 
// const path= require('path');

// parsers and middlewares
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// this line use catch frontend data
// app.use(express.static(path.join(__dirname, 'public')))
// this is use for the ejs file 
// app.set('view engine','ejs');


// app.get("/",(req,res)=>{
    // res.send("All set .");
    // res.render("index");

// })
// app.get("/profile/:id/:age",(req,res)=>{
    // res.send("All set .");
    // this line use to show data on the screen 
    // res.send(req.params); this show json type data 
    // res.send(`welcome ,${req.params.id}`);

// })

// app.listen(3000,()=>{
    // console.log("port on running 3000")
// })

const express = require('express');
const app = express();
const path = require('path'); 
const fs=require('fs'); 


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
    // res.send("hello world");
    fs.readdir(`./files`,(err,files)=>{
            // console.log(files);
            res.render("index",{files:files});
    })
   
})
app.post('/create',(req,res)=>{
    // res.send("hello world");
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.detail,function(err){
        res.redirect("/");
    })
   
   
})


app.listen(3000,()=>{
    console.log("port on running 3000")
})
