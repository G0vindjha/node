const express = require('express');
const userModel = require('./usermodal');
const app = express();

app.get('/',function(req,res){
    res.send("hello");
});

app.get('/create',async function(req,res){
    const user = await userModel.create({
        name:'Shrusti Jha',
        email:'shrusti@gamil.com',
        username:'shrusti'
    });
    res.send(user);
});

app.get('/update',async function(req,res){
    const updateUser = await userModel.findOneAndUpdate({
        username:'sam'
    },{
        name:'Govind Jha',
        email:'jhagovind@gamil.com',
    });
    res.send(updateUser);
});

app.get('/delete',async function(req,res){
    const deleteUser = await userModel.findOneAndDelete({
        username:'sam'
    });
    res.send(deleteUser);
});

app.get('/users',async function(req,res){
    const allUser = await userModel.find();
    res.send(allUser);
});

app.listen(3000);
