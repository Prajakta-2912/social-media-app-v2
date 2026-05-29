const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes =require("./routes/commentRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/users",userRoutes);
app.use("/api/comments",commentRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});