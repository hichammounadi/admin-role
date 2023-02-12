require('dotenv').config()

const express = require('express')
const connectDB = require('./db')
const adminRouter = require('./model/adminRouter')
const roleRouter = require('./role/roleRouter')
const app = express()


const port = process.env.PORT || 3000

app.use(express.json())


app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/role', roleRouter)


// ! should add middleware for 
// ? error handler
// ? router not-found



start = async() => {
    try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Live on : http://localhost:${port}`))
    } catch (error) {
        console.log(`there was an error ${error}`)    
    }
}

start()