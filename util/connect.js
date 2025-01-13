const mongoose = require("mongoose")

const URIC = process.env.URI

const ConnectDb = async() =>{
    try{

        await mongoose.connect(URIC)

        console.log("connect successfully")

    }catch(error){
        console.log("something wrong")
    }
}


module.exports = ConnectDb