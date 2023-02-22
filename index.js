const express = require("express");
const cors = require('cors')

const alldata = require('./routes/alldata');
const store = require('./routes/store');
const app = express();

app.use(cors());
app.use("/",alldata);
app.use("/",store);

app.listen(5000,function(){
    console.log( "Server is running in port 5000")
})