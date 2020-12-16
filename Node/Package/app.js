const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const { valid } = require('joi');
const app= express();
app.use('/public',express.static(path.join(__dirname,'Static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Static','index.html'));
})
app.listen(3000);

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().max(10).required()
    });
    const validation = schema.validate(req.body);
    res.send(validation);
    res.json({success: true});
})

