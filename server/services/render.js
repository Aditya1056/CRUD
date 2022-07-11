const axios = require('axios');
const { response } = require('express');
//request,response functions that are included in routes

const home = (req,res)=>{
    //make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index',{users:response.data});
        })
        .catch(err=>{
            res.send({message : err.message});
        })
}
const adduser = (req,res)=>{
    res.render('adduser');
}
const updateuser = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id : req.query.id}})
        .then(function(user){
            res.render('updateuser',{user:user.data});
        })
        .catch(err=>{
            res.send(err);
        })
}
module.exports={home,adduser,updateuser};
