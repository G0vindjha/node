const express = require('express');
const userModel = require('./usermodal');
const app = express();

app.get('/',function(req,res){
    res.send("hello");
});

app.get('/create',async function(req,res){
    const user = await userModel.create({
        name:'Govind',
        email:'jhag2491@gamil.com',
        username:'sam'
    });
    res.send(user);
});

app.listen(3000);