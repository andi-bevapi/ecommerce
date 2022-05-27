const mongoose = require("mongoose");
const colors = require("colors");
const users = require("./data/users");
const products = require("./data/products");

const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");

const db = require("./db");

db.connectDB();

const importData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

       const createdUsers = await User.insertMany(users);
       console.log("createdUsers----",createdUsers);
       
       const adminUser = createdUsers[0]._id;

       const sampleProducts = products.map((product) =>{
           return {...product , user: adminUser};
       });

    //    console.log("sampleProducts----",sampleProducts);
       await Product.insertMany(sampleProducts);

       process.exit(1);
    }catch(err){
        console.log("error-----",err);
    }
}


const destroyData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
       
       console.log("-all data are deleted---".bgRed);
       process.exit(1);
    }catch(err){
        console.log("error-----",err);
    }
}

if(process.argv[2] === "-d"){
    destroyData();
} else{
    importData();
}