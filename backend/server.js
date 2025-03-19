import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"



dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("🔥 MongoDB Connected Successfully!");
    }
     catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
    }
};

connectDB();

server.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
    } else {
        console.error("Error starting server:", error);
    }
});