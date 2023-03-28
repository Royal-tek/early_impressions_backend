const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const isAuthenticated = async (req, res, next)=>{
    const token = req.header('auth_token')
    if(token){
        try {
            const verified = jwt.verify(token, process.env.SECRET_KEY)
            const user = await User.findById(verified.id)
            req.user = user
            
            next()
        } catch (error) {
            res.status(500).json({
                message : 'Invalid Token',
                error
            })
        }
    }else{
        return res.status(400).json({
            error : 'You are not authenticated to see this page'
        })
    }
}

module.exports = isAuthenticated