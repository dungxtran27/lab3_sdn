// use express module to create websever
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./database.js";
// create constant named app represent sever express in the application
import { productRouter } from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// active router for client request
app.get("/", (req, res) => {
  res.send("Welcome dungmh asdsdasdadssaah");
});
app.use("/product/", productRouter);
const Port = process.env.PORT;
// listen to server
app.listen(Port, async () => {
  connectDB();

  console.log(`websever runnning on port  ${Port}`);
});
