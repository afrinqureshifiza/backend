//import schema
const todo = require('../models/todo')

//define route handler
exports.createtodo= async(req, res)=>{
    try{
      //extract title and description from request ki body
      const {title, description} = req.body
      //create todo obj
      const respone = await todo.create({title, description})
      //send json respose with success flag
      res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry created successfully'
        }
      )
    }
    catch(e){
       console.error(err)
       console.log(err)
       res.status(500).json({
        success:false,
        data:'Internal server error',
        message:err.message
       })
    }
}