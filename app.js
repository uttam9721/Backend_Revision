const express = require('express');
const app = express();

const userModel = require('./usermodel');

// app.use((req, res, next)=> {
//     console.log('hii uttam');
//     next();
// })


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/create',async (req, res) => {
    // res.send('Hello World!');
 let createduser = await userModel.create({
        name:"uttam",
        email:"uttam123@gmail.com",
        username:"uttam01"
    })
    res.send(createduser)
    
})

app.get('/update', (req, res) => {
    // res.send('Hello World!');
   userModel.findOneUpdate({username:"uttam"},{name:"maurya"},{nre:true});
   
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});
