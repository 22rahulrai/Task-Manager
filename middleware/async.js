// It helps manage errors that occur in asynchronous code without having to repeat try...catch blocks in every route handler.

const asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
        try{
            await fn(req,res,next)
        }
        catch(error){
            next(error)
        }
    }
}


module.exports=asyncWrapper