const jwt =require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");



// naya data add krne 
// make changes here 
// authjs 

const userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, 
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  gender:{
type:String,
required:true,
  },
date :{
  type:Date,
default:Date.now
},

messages:[
{
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, 
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }

}
],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        }
      }
    ]
  
});

// hashing the password
//when save method is called from auth.js it is automatically called so we specifiy password
//here next acts as a middleware
userschema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
//generating token
userschema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
}
// contact message 
userschema.methods.addmessage = async function (name,email,phone,message){
try {
  this.messages = this.messages.concat({name,email,phone,message})
  await this.save();
  return this.message;
} catch (error) {
  console.log(error)
}
}

const User = mongoose.model("USER", userschema);
module.exports = User;
