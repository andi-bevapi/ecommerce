const port = 9595;
const express = require("express");
const app = express();
const products = require("./data/products");
const cors = require("cors");

const corsOptions = {
   cors:{
    origin: "http://localhost:9292",
    methods:["GET","POST","PUT","DELETE"]
   }
}

app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    res.send("api is running--------");
});


app.get("/api/products",(req,res)=>{
    res.send(products);
});

app.get("/api/products/:id",(req,res)=>{
    const {id} = req.params;
    const productbyId = products.filter((el)=>{
        return el._id == id
    })
    res.send(productbyId);

});

app.listen(`${port}`,(console.log("app is runing")));