import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import connectDB from "./database.js";
import {
  categoryRouter,
  commentRouter,
  productRouter,
} from "./routes/index.js";

const app = express();

// Set up CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use(cors());

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome dungmh asdsdasdadssaah");
});

app.use("/product/", productRouter);
app.use("/category/", categoryRouter);
app.use("/comment/", commentRouter);

const Port = process.env.PORT;

app.listen(Port, async () => {
  connectDB();
  console.log(`websever runnning on port  ${Port}`);
});
