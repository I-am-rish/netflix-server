const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());

const DB =
  "mongodb+srv://netflix:netflix321@cluster0.sc1dvgn.mongodb.net/netflix-app?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  }).catch(()=> {
    console.log('mongodb not connected');
  })

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server running"));
