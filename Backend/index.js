require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const PORT = process.env.PORT || 5000;

// connection with database
connectDB();

// middleware
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/post", require("./routes/postRoutes"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
