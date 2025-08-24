import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())

// routes
app.use("/api", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})