const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
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
    age : Number,
    stage : {
        type : String,
        enum : ['nursery','primary', 'secondary']
    },
    parent : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Student', studentSchema)