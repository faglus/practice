const express = require('express');
const mongoose = require('mongoose');
const app =express();

const dataRouter = require('./route/route');

require('dotenv').config();






const databaseUrl= process.env.DATABASE_URL;
const dbName ="practiceOnly";

mongoose.connect(databaseUrl,{});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'mongoDB connection error:'));
db.once('open',()=>{
    console.log(`Connection to MongoDb:${dbName}`)
});



// root route

app.use(express.json());
app.use('/practice',dataRouter);

app.get('/',(req,res)=>{
    res.send('welcome to this practice session');
});





const PORTNo=process.env.PORT
app.listen( PORTNo,()=>{
    console.log(`server started at port no ${PORTNo}`);
});

