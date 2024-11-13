const mongoose = require('mongoose')


const connectdb = (mongodb+srv://admin_Rai:1234@nodeexpressproject.5whvw.mongodb.net/NodeExpressProject?retryWrites=true&w=majority&appName=NodeExpressProject) => {
    return mongoose.connect(mongodb+srv://admin_Rai:1234@nodeexpressproject.5whvw.mongodb.net/NodeExpressProject?retryWrites=true&w=majority&appName=NodeExpressProject,
        {
            useNewUrlParser: true,// Use the new MongoDB URL parser
            // useCreateIndex:true,
            // useFindAndModify:false,
            useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
            writeConcern: {
                w: 'majority',
                j: true,
                wtimeout: 1000
            }

        })
}
// .then(()=>console.log('connected to the database...'))
// .catch((err)=>console.log(err))

module.exports = connectdb
