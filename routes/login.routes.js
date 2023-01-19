const express = require("express");
const loginRouter = express.Router();
const { UserModel } = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { login } = require("../middlerwares/login");
loginRouter.use(login);
loginRouter.post('/',async(req,res)=>{
    const{email,password} =req.body;
    try{
        const user = await UserModel.find({ email });
        if(user.length > 0){
            const password_hash = user[0].password;
            bcrypt.compare(password, password_hash,function(e,finding){
                if(finding){
                    let token = jwt.sign({userID:user[0]._id},"hush",{
                        expiresIn:"24h",
                    });
                    res.send({
                        msg: "Login Successful",
                        token:token 
                        
                    });
                }
            });
        }else{
            res.send("Invalid Credentials")
        }

    }catch(e){
        console.log(e)
        res.send('Invalid Credentials')
    }
});

module.export ={ loginRouter }