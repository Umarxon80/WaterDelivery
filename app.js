import express from "express";
import index from "./routes/index.js";

import config from "config";


const PORT=config.get("port")

const app=express()
app.use(express.json())
app.use("/api",index)

async function start() {
    try {
        app.listen(PORT,()=>{
            console.log(`server on at  http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
        
    }
}

start()