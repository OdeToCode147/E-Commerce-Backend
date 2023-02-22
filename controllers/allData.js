const { findAllFromDb } = require("../database/connection");

const alldata=async(req,res)=>{
    try {
        const Data =await findAllFromDb({},"AllData")
        return res.status(200).send(Data);
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.getalldata=alldata;