const express = require('express');
const app= express();

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(3000, ()=>{
    console.log('server started at port 3000')
})

app.get('/',(req,res)=>{
    res.send('Hello jee');
})

app.post('/api/cars', (req,res)=>{
    const {name, brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send('Car Submitted successfully');
})

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log('Successful')})
.catch((err)=>{console.error('Error')});
 