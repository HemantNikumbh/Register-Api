const express = require("express")
require("dotenv").config()
const ConnectDb = require("./util/connect")
const router = require("./Router/user-router")
const app = express()

app.use(express.json())
app.use("/api",router)




ConnectDb().then(()=>{
    app.listen(4000,()=>{
       console.log("server is created");    
  });
});
      