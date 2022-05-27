const mongoose = require("mongoose");
const URI = "mongodb+srv://andi:andi@cluster0.upb5e.gcp.mongodb.net/proshop?retryWrites=true&w=majority";


const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(URI);
        console.log("connected-----".bgYellow);
    }catch(error){
        console.log("error-----",error);
    }
}

module.exports = {connectDB};