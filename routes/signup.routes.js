const express = require('express')

const signupRouter = express.Router();
const{ UserModel } = require('../models/User.model')
const bcrypt = require('bcrypt')
const {signup} =require("../middlerwares/signup")

signupRouter.use(signup);

signupRouter.post("/" ,async(req, res)=>{
    const{ email,password } = req.body ;
    const userFind = await UserModel.findOne({ email });
    if(userFind){
        res.send('Try loggin in , already exist')
    }try{
        bcrypt.hash(password,4,async function (err,hash){
            if(e){
                console.log(e);
            }else{
                const user = new UserModel({email,password:hash});
                await user.save();
                res.send('signup Sucessfull')
            }
        });
    }catch(e){
        console.log(e)
    }
})
signupRouter.get('/data',async(req,res)=>{
    let user = await UserModel.find();
    res.send(user)
})

module.exports = { signupRouter }