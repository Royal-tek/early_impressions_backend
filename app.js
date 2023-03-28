const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
require('./config/db')
const port = process.env.PORT
const authRoutes = require('./routers/authRoutes')
const studentRoutes = require('./routers/studentRoutes')
const tutorRoutes = require('./routers/tutorRoutes')
const multer = require('multer')
const bodyParser = require('body-parser')
const cors = require('cors')




app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/tutor', tutorRoutes)


app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running on port ${port}`)
})

