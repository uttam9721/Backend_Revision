const express = require('express');
const app = express();



app.use((req, res, next)=> {
    console.log('hii uttam');
    next();
})


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/profile', (req, res) => {
    res.send('Hello profile!');
    // return next(new Error("something went wrong"));
})
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("something broke !");
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});