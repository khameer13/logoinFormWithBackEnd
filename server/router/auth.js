const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate= require("../middleware/authenticate");

require("../db/conn");

const User = require("../modle/user");
const { json } = require("express");

router.get("/", (req, res) => {
  res.send(`hello wprld router server`);
});

//using promises
// router.post('/register',(req,res)=>{

//   const{ name, email, phone, work, password, cpassword} = req.body;
//   if(!name || !email || !phone|| !work|| !password|| !cpassword){
// return res.status(422).json({error:"please fill all the field"});
//   }

//    User.findOne({email:email})
//   .then((userExist) => {
//     if(userExist){
//       return res.status(422).json({error:"email already exist"});
//     }

//     const user = new User({ name, email, phone, work, password, cpassword});

//     user.save().then(()=>{
//       return res.status(201).json({message :"user regestration successfull"});
//     }).catch((err)=>{
//       return res.status(500).json({error:"failed to register"});
//     })
//   }).catch(err => {console.log(err);});
// }); 
  

// using async
router.post("/register", async (req, res) => {
  const { name, email, phone, work, gender,password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !gender || !password || !cpassword) {
    return res.status(422).json({ error: "please fill all the field" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password not matching" });
    } else {
      const user = new User({ name, email, phone, work,gender, password, cpassword });

      //  next function invokes while 'save' is running it act as a middleware

      await user.save();

      res.status(201).json({ message: "user regestration successfull" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz enter vsomething" });
    }

    const userlogin = await User.findOne({ email: email });

    // console.log(userlogin);
    if (userlogin) {
      const isMatch = await bcrypt.compare (password, userlogin.password);
      
      let token = await userlogin.generateAuthToken();


      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly : true
      });

      console.log(` COOKIE FROM ANOTHER VED${req.cookies.jwtoken}`);

      if (!isMatch) {
        res.status(400).json({ error: "user login fail" });
      } else {
        res.json({ message: "user login sucessfull" });
      }
    } else {
      res.status(400).json({ error: "user login fail" });
    }
  } catch (err) {
    console.log(err);
  }
});

// for authentication


// need few changes ig 3:22
 
router.get('/about',authenticate, (req,res) => {
    console.log(`hello about server`);
    res.send(req.rootUser);
   });

  //  contact data feedback
   router.get('/getdata',authenticate, (req,res) => {
    console.log(`hello about server`);
    res.send(req.rootUser);
   });

  //  contact page
  router.post('/contact',authenticate,async(req,res) => {
  try {
    const {name,email,phone,message}= req.body;
    if(! name || !email || !phone || !message){
      console.log('error hai');
      return res.json({error:"plz fill all fields"});
    }

    const userContact=await User.findOne({_id:req.userId});
    if(userContact){
      const userMessage= await userContact.addmessage(name,email,phone,message);
      await userContact.save();
      res.status(201).json({message:"user contact succesfull"});
    }

  } catch (error) {
    console.log(error)
  }
  });

  // logout ka page
  router.get('/Logout', (req,res) => {
    console.log(`hello logout server`);
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send(` logout hogaya`);
   });


module.exports = router;
