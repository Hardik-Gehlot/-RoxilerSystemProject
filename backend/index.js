import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api",routes);

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/roxilerDatabase")
.then(()=>{
    app.listen(5001,()=>{
        console.log("🚀 server listening on port:➡ 5001");
    });
}).catch((error)=>{
    console.log("Error Connecting to mongoDB");
});