const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const PORT = process.env.PORT || 3000


// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes 
app.use('/v1/api/tasks', tasks)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , ()=>{console.log(`server is listening to port ${PORT}`)})
    } catch (error) {
        console.log("DB connection failed")
    }
}

start()

