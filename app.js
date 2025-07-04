const connectdb = require('./db/connect')
const express = require('express')
const app = express()
const task = require('./routes/router')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//###### middleware
app.use(express.static('./public'))
app.use(express.json())



//######## routes
// app.get('/',(req,res)=>{
//     res.send('<h1>task mangaer app</h1>')
// })

app.get('/', (req, res) => {
  res.send('<h1>Task Manager API</h1>');
});

app.use('/api/v1/tasks', task)


app.use(notFound)//404 msg
app.use(errorHandlerMiddleware)

// Connect to MongoDB (do not await, just call)
connectdb(process.env.mongo_uri)

// Export the app for Vercel
module.exports = app;

// const port=3000

// const start=async()=>{
//     try{
//         await connectdb(process.env.mongo_uri)
//         app.listen(port,console.log(`sever is listening on port ${port} ...`))
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()


//app.get('/api/v1/tasks')             — get all the tasks
// app.post('/api/vl/tasks')           — create a new task
// app.get('/api/vl/tasks/:id')        — get single task
// app.patch(/api/vl/tasks/:id)        — update task (usually we use put but now we are using patch)
// app.delete('/api/vl/tasks/:id')     — delete task
