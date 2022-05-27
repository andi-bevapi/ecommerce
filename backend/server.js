// require("dotenv").config();
const colors = require("colors");
const express = require("express");
const app = express();
const products = require("./data/products");
const cors = require("cors");
// const port = process.env.PORT;
const port = 9595;
const db = require("./db");
const product = require("./routes/productRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: true }));
db.connectDB();

const corsOptions = {
   cors:{
    origin: "http://localhost:9292",
    methods:["GET","POST","PUT","DELETE"]
   }
}


app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send("app is running")
});



app.use("/products",product);

app.use((error,req,res,next)=>{
    console.log("in error");
    res.status(404).send("not Found");
})

app.listen(`${port}`,(console.log("app is runing on".underline.red )));