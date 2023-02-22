const {MongoClient} = require("mongodb");

const url = "mongodb+srv://Surya147:Surya147@cluster0.ogvpazb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
const findAllFromDb = async (query,collectionName,queryData) => {
    try {
        await client.connect();
       // console.log("Connection to db is successful")
        const database = client.db("ECommerce");
        const collection = database.collection(collectionName)
        const dbResponse = await collection.find(query).toArray();
       
       
        return dbResponse;
        
    } catch (error) {
        return error.message;
    }
   
}
module.exports = {findAllFromDb };