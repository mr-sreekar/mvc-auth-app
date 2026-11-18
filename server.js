import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoroute.js";
import userRoutes from "./routes/userroute.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const mongoURI = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
connectDB(mongoURI, dbName);
app.use(express.json());
app.use("/api/v1/todos", todoRoutes);
app.use("/api/v1/users", userRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});