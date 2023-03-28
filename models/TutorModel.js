const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tutorSchema = new Schema({
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
    image:{
        type : String,
        lowercase : true,
        trim : true,
    },
    bio:{
        type : String,
        trim : true,    
        maxLength : 70,
        minLength: 30,
        required : true
    },
    category : {
        type : String,
        enum : ['nursery','primary', 'secondary', 'special'],
        required : true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Tutor', tutorSchema)