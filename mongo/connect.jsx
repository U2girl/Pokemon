const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB= async=>{

  try {
    mongoose.connect(
    "mongodb+srv://elycias:eDUTGpLHtkVUmjfR@cluster0.pmb0e6f.mongodb.net/PokemonHW?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )

    console.log("Database connected successfully");
  } catch (error) {

      console.error("Error connecting to database:", error);
  }
}
module.exports=connectDB
