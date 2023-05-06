const express = require("express");
const User = require("../modals/User");
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECERT = 'suhailisagoodboy'
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Route  1 :  Create a user using Post : '/api/auth/createuser'  .  no login required
router.post(
  "/createuser",
  [
    body("name", "please enter a valid name ").isLength({ min: 5 }),
    body("email", "please enter a valid email").isEmail(),
    body("password", "please enter a valid password ").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(req.body);
    
    // If their are errors return a bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try{

    const salt =  await  bcrypt.genSalt(10)
    const secPass = await  bcrypt.hash(req.body.password,salt)
     // Chech wheather the with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res
        .status(400)
        .json({
          errors: " Sorry a user with this email this email already exists  "
        });
    }
// async  await method is used by using then method 


    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.name
    })

    const data = {
      user : {
        id: user.id
      }
    }
   const authToken = jwt.sign(data,JWT_SECERT)
   console.log(authToken)
    res.json({authToken : authToken})

  }   catch(error){
      console.error(error.message)
      res.status(500).send(" Some external error ocurred")
  }
  }
);


//   Route  2  : Authenticate a user a user using Post : '/api/auth/createuser'  .  no login required

router.post(
  "/login",
  [
   
    body("email", "please enter a valid email").isEmail(),
    body("password", "password can not be blank").exists()
    
  ],
  async (req, res) => {
// If their are errors return a bad request
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
const {email , password} = req.body


try{

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    res
      .status(400)
      .json({
        errors: "please try to login with correct credentials   "
      });

  }

  const passwordCompare =  await bcrypt.compare(password,user.password)
  if (!passwordCompare) {
    res
      .status(400)
      .json({
        errors: "please try to login with correct password  "
      });
    }
    const data = {
      user : {
        id: user.id
      }
    }
   const authToken = jwt.sign(data,JWT_SECERT)
   console.log(authToken)
    res.json({authToken : authToken})

}  catch(error){
  console.error(error.message)
  res.status(500).send(" Some external error ocurred")
}

  });

// Route 3 : For searching or finding a user ;

  router.post('/getuser',fetchuser ,async (req,res) => {
    try {   

const userId = req.user.id;
const user = await User.findById(userId).select('-password');

res.send(user)





    } catch (error) {


console.error(error.message)
res.send(500).send(' Internal Server Error');
    }

  })
module.exports = router;
