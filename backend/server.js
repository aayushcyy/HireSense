import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import analyzeRoute from "./routes/analyzeRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("MongoDB error: ", err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
