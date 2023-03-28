const router = require('express').Router()
const tutorController = require('../controllers/tutorController')
const authMiddleware = require('../middleware/authMiddleware')

//  ADD NEW TUTOR
router.post('/add-tutor', tutorController.registerTutor)
//  UPDATE A STUDENT 
// router.put('/update-student/:id', authMiddleware, studentController.updateStudent)
// DELETE A STUDENT
// router.delete('/delete-student/:id', authMiddleware, studentController.deleteStudent)




module.exports = router