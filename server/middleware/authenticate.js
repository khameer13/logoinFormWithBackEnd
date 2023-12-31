const jwt = require("jsonwebtoken");
const User = require("../modle/user");
const dotenv = require("dotenv");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    // console.log(token);
    const verifyToken = jwt.verify(token,  process.env.SECRET_KEY);  //process.enc.secret_key
    console.log(verifyToken);

    
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token
    });

    if (!rootUser) {
      throw new Error("user not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
  
    next();

  } catch (err) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
