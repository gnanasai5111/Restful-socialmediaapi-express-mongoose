const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute=require("./routes/posts");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true}).then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts",postRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
