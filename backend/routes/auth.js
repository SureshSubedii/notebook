const express=require('express');
const User=require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const fetchUser = require('./middleware/fetchUser');

//Route1: Create a new user
router.post('/createuser',[
    body('email','Enter a valid Email.').isEmail(), //Check if the email is valid.
    body('password','Password must be minimun 5 characters long.').isLength({ min: 5 }),//Specify the minimun length of the password.
    body('name','Name must be minimun 3 characters long.').isLength({ min: 3 }),

],async (req,res)=>{
  //If there are errors, return bad requests and results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether  the user with same email already exists.
    try{
    let user=await User.findOne({email:req.body.email})
    if(user){
      return res.status(400).json({ error: "Sorry a user already exists with this email."});

    }
    const salt= await bcrypt.genSalt(10);
    const secpass= await bcrypt.hash(req.body.password,salt);
    
      //Create a user.
    user= await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
        gender: req.body.gender
      })
 
    const data={
      user:{
        id:user.id
      }

    }
    const authToken=jwt.sign(data,"Hello Mf")
    res.json({AuthToken:authToken});
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred.")
    }})
    //Route 2:Authenticate the user, No login required.
    router.post('/login',[
      body('email','Enter a valid Email.').isEmail(),
      body('password','Password cannot be blank.').exists()
    ],async (req,res)=>{
      //If there are errors, return bad requests and results)
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}
     
      const {email,password}=req.body;
      try{
        let user=await User.findOne({email});
        if(!user){
          return res.status(400).json({ errors: "Please,login with correct credentials." })

        }
        const passCompare= await bcrypt.compare(password,user.password);
        if(!passCompare){
          return res.status(400).json({ errors: "Please,login with correct credentials." })

        }
       
          const data={
            user:{
              id:user.id
            }
      
          }
          const authToken=jwt.sign(data,"Hello Mf")
          res.json({AuthToken:authToken});

        
      }
      catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error Occurred.")
      }
})
//Route3: Get logged in user details. Login required.
router.post('/getuser',fetchUser,async (req,res)=>{
  try {
    let userId=req.user.id;
    const user=await User.findById(userId).select("-password");
    res.send(user);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occurred.")
    
  }


})

module.exports=router