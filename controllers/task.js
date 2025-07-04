const Task=require('../models/tasks')
// const asyncWrapper=require('./middleware/async')


const getalltask= async (req,res)=>{
    try {
        const tasks=await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    // res.send('get all items')
}


const createtask=async (req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(201).json({task})    
    }
    catch(error){//if length is greater than 15 it will show this error 500
        res.status(500).json({msg:error})
    }
}

const gettask= async (req,res)=>{
    try {
        const {id:taskID} =req.params
        const task =await Task.findOne({_id:taskID})//Mongoose method that queries the database for a single document where the condition matches
        if(!task){ // when id not found
            return res.status(404).json({msg:`no task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {//this error will come when syntax is wrong
        res.status(500).json({msg:error})
    }
    // res.send('get single task')
}

const updatetask=async(req,res)=>{
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,//This option returns the updated document rather than the old one.
            runValidators:true //Ensures that Mongoose validators are run on the update operation (e.g., required fields, max length, etc.).
        } )
        //res.status(200).json({id:taskID,data:req.body})//this is unnecessary it is just use to print data in mongodb
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}


const deletetask=async (req,res)=>{
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } 
    catch (error) {
        res.status(500).json({msg:error})
    }
    //res.send('delete task')
}




module.exports={
    getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask
}



// ###############       summary of create task
// Extracts task data from the incoming request body (req.body).
// Creates a new task in the MongoDB database using the Mongoose Task.create() method.
// Waits for the task creation to complete using await.
// Sends a response back to the client with a status code of 201 (Created) and the newly created task in JSON format.


// const gettask  
// Summary of the Flow:

//Extract the task ID from the request URL parameters.
//Query the MongoDB database using Mongoose to find a task with the corresponding _id.
//If the task is not found, return a 404 error with a message.
//If the task is found, return the task data with a 200 status code.
//If any errors occur during the process, catch them and return a 500 status code with the error message.


