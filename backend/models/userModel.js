const mongodb = require("mongoose");


const userSchema = mongodb.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true
    },
    isAdmin : {
        type : Boolean,
        required: true,
        default:false
    }
});

const User = mongodb.model("User",userSchema);

module.exports = User;