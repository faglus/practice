const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");

const app =express();

const authRoutes = require("./route/auth.route");
const dataRouter = require('./route/route');
const userRouter =require("./route/user.route");
const loginRouter= require("./route/login.route");
// const {validateJWT} =require("./middleware/verifyJWT");

require('dotenv').config();
require("./config/passport.config"); 






const databaseUrl= process.env.DATABASE_URL;
const dbName ="practiceOnly";

mongoose.connect(databaseUrl,{});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'mongoDB connection error:'));
db.once('open',()=>{
    console.log(`Connection to MongoDb:${dbName}`)
});


// 


// Middleware
app.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: false,
      saveUninitialized: true,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Views
  app.set("view engine", "ejs");
  app.set("views", "./views");
  
  // Routes
  app.use("/", authRoutes);

// root route

app.use(express.json());
app.use('/practice',dataRouter);
app.use('/user',userRouter);
app.use('/auth',loginRouter);

app.get('/',(req,res)=>{
    res.send('welcome to this practice session');
});





const PORTNo=process.env.PORT
app.listen( PORTNo,()=>{
    console.log(`server started at port no ${PORTNo}`);
});

