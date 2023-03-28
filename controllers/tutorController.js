const Tutor = require('../models/TutorModel')

exports.registerTutor = async (req, res)=>{
    try {
        const tutor = await Tutor.create(req.body)
        await tutor.save()
        res.status(201).json({
            message:"Tutor Created Sucessfully",
            tutor : tutor
        })
    } catch (error) {
        res.status(500).json(error)
    }
}