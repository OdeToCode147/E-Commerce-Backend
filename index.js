const express = require("express");
const cors = require("cors");
const port = 5000;

const alldata = require("./routes/alldata");
const store = require("./routes/store");
const app = express();

app.use(cors());
app.use("/", alldata);
app.use("/", store);

// app.listen(5000,function(){
//     console.log( "Server is running in port 5000")
// })

app.listen(process.env.PORT || port, () =>
  console.log(`Listening on Port ${port}`)
);
