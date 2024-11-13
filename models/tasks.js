
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data.
const mongoose=require('mongoose')

mongoose.set('useFindAndModify', false);// Add this line to disable the warning globally

const taskschema=new mongoose.Schema({ //This line creates a Mongoose schema for a collection
    // name:String,
    // completed:Boolean
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true, //removes any trailing whitespace from the value before it is saved to db
        maxlength:[15,'name cannot be more than  15 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('task',taskschema)




// Summary:

//The code defines a Task schema with two fields (name and completed).
//It exports a Mongoose model based on this schema, allowing you to perform CRUD operations on the tasks collection in MongoDB.


