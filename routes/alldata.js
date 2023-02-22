const express=require('express')
const Data = require('../controllers/allData');
const mainRouter=express.Router()
mainRouter.route("/alldata").get(Data.getalldata)
module.exports=mainRouter;