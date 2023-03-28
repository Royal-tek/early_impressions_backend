const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userShema = new Schema({
    firstname : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
    },
    lastname : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        unique : true
    },
    phone : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        minLength : 6,
        trim : true,
    },
    verified : {
        type : Boolean,
        default : false
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
    
},
{
    timestamps : true
})

module.exports = mongoose.model('User', userShema)