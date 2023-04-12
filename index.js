import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cors from "cors";


const app = express();
dotenv.config()


const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connection established with database")
    } catch (error) {
        throw new error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("Disconnected with database")
})

//Middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())
// app.use(express.urlencoded())


app.use("/api/auth", adminRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errormessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errormessage,
        stack: err.stack,
    })
})

app.listen(process.env.PORT,()=>{
    connect()
    console.log(`App is running on Port : ${process.env.PORT}`)
})