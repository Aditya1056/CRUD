const express = require('express');
const controller = require('../controller/controller');

const route = express.Router();

const services = require('../services/render.js');

// all the routes requested from client

route.get('/',services.home);
route.get('/adduser',services.adduser);
route.get('/updateuser',services.updateuser);


//API

route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports=route;