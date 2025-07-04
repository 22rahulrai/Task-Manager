const mongoose = require('mongoose')


const connectdb = (url) => {
    return mongoose.connect(url,
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
