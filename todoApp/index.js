const express = require('express')
const app = express();

require('dotenv').config()


//middlreware to parse req body
app.use(express.json())

//import routes for todo api
const todoRoutes = require('./routes/todo')
app.use('/api/v1', todoRoutes)



const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`running... at port ${port}`)
})

//connect to db
const dbConnect = require('./config/database')
dbConnect()

//default route
app.get('/', (req,res)=>{
    res.send('<h1>This is home page</h1>')
})