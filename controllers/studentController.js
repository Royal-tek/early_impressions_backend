const {isValidObjectId} = require('mongoose')
const { update } = require('../models/studentModel')
const Student = require('../models/studentModel')



//  PARENT TO ADD A STUDENT
exports.addStudent = async (req, res)=>{
    const {firstname, lastname, age, stage } = req.body
    parent = req.user._id
    const student = new Student({
        firstname : firstname,
        lastname : lastname,
        age : age,
        stage : stage,
        parent : parent
    })
    try {
        const newStudent = await student.save()
        res.status(201).json({
            message : 'Student Registered',
            student : newStudent
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// PARENT TO EDIT A STUDENT
exports.updateStudent = async (req, res)=>{

    try {
        const student = await Student.findById(req.params.id)

        if(!student) return res.status(400).json({message : 'No student found'})
        
        if(String(student.parent) === String(req.user._id)){
            const updatedStudent = await Student.findByIdAndUpdate(student._id, {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                stage : req.body.stage,
                age : req.body.age,
                parent : req.user
            }, {new:true})
            res.status(200).json(updatedStudent)
        }
        else{
            return res.status(400).json({
                error : 'You can only edit your ward'
            })
        }

    } catch (error) {
        res.status(500).json(error)
        
    }
}

//  PARENT TO DELETE A STUDENT
exports.deleteStudent = async(req, res)=>{
    try {
        
        const parent = req.user
        const student = await Student.findById(req.params.id)
        console.log(parent._id)
        console.log(student.parent)
        if(String(student.parent) === String(parent._id)){
            const deletedStudent = await Student.findByIdAndDelete(student.id)
            return res.status(200).json({
                message : 'Student Has been deleted'
            })
        }
        else{
            return res.status(400).json({
                error : "You an only delete your ward"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}