const express =require("express");
const joi= require("joi");

const app =express();

app.use(express.json());

const schema =joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password:joi.number().min(8).required(),
});


module.exports ={schema}