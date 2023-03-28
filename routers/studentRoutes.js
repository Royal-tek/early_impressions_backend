const router = require('express').Router()
const studentController = require('../controllers/studentController')
const authMiddleware = require('../middleware/authMiddleware')

//  ADD NEW STUDENT
router.post('/add-student', authMiddleware, studentController.addStudent)
//  UPDATE A STUDENT 
router.put('/update-student/:id', authMiddleware, studentController.updateStudent)
// DELETE A STUDENT
router.delete('/delete-student/:id', authMiddleware, studentController.deleteStudent)




module.exports = router