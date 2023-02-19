import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DB;

const Connection = async () => {
  try {
    mongoose.connect(database, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("database is not connected");
  }
};

export default Connection;
