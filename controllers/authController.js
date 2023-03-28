const mongoose = require('mongoose')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// REGISTER A USER
exports.register = async (req, res)=>{
    
        const {firstname, lastname, email,phone, password, confirm} = req.body
            
                const userExists = await User.findOne({email})
                if(userExists) return res.status(400).json({
                    error : 'Email has already been registered'
                })

                if(password !== confirm) return res.status(400).json({
                    error : "Passwords do  not match"
                })

                if(password.length <=5 ) return res.status(400).json({
                    error: "Password must contain 6 or more characters"
                })

                const salt = await bcrypt.genSalt(10)
                const hashedPwd = await bcrypt.hash(password, salt)

                const newUser =  new User({
                    firstname : firstname,
                    lastname : lastname,
                    phone : phone,
                    email : email,
                    password : hashedPwd
                })

                try {
                    const user = await newUser.save()
                    res.status(201).json({
                    message : "User Created Successfully",
                    user : user
                    })
                } catch (error) {
                    res.status(500).json(error)
                }
            }
//  LOGIN A USER
exports.login = async (req, res)=>{
    
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({
            error : 'No account with this Email'
        })
        
        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) return res.status(400).json({
            message : 'Incorrect username or password'
        })
        
        const token = jwt.sign({id : user._id, isAdmin : user.isAdmin}, process.env.SECRET_KEY, { expiresIn : '1d'})
        res.status(200).json({
            message : 'Login Successful',
            token : token
        })
    } 
    catch (error) {
        res.status(500).json(error)
    }

}


exports.testRoute = async (req, res)=>{
    res.json('Just some test')
}

