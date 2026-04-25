import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        console.log("Connected to MongoDB successfully !! DB HOST: ", connectionInstace.connection.host);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with an error code
    }
}

export default connectDB;