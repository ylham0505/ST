const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const userRoutes = require('./routes/user.js')
const adminRoutes = require('./routes/admin.js')
const path = require('path')
const cors = require('cors')



const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())
app.use(userRoutes)
app.use(adminRoutes)


async function start() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
} 

start()