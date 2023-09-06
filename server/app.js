const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();



dotenv.config({path:'./config.env'});    //imp line
require('./db/conn');
// const User = require('./model/userschema');

app.use(express.json());
app.use(cookieParser());//added by another vedio
//link router filne
app.use(require('./router/auth'));


const PORT = process.env.PORT;


// const middleware = (req,res,next) => {
//  console.log(`heelo middleware`); 
//  next();
// }

// app.get('/',(req,res) => {
//   res.send(`hello wprld server`);
// });

  // app.get('/about',middleware,(req,res) => {
  //   res.send(`hello wprld about`);
  // });

  // app.get('/contact',(req,res) => {
  //   res.send(`hello wprld connect contact`);
  // });

  app.get('/signin',(req,res) => {
    res.send(`hello wprld server signin`);
  });

  app.get('/signup',(req,res) => {
    res.send(`hello wprld server signup`);
  });


app.listen(PORT, () => {
    console.log(`he3lo `,{PORT});
})