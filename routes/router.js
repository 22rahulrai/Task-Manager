const express=require('express')
const router=express.Router();

const {
    getalltask,
    createtask,
    gettask,
    updatetask,
    deletetask
}=require('../controllers/n1task')
// there is no two files in controllers
// 1 task.js it contains try catch and code is getting complex so we put try catch in another file
// 2 n1task.js in this file we are using asynchorounus

router.route('/').get(getalltask).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)



module.exports=router





