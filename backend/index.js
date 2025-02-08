require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const dbConnect = require("./config/db")

const Transactions = require("./routes/Transactions")
const Category = require("./routes/category")
const User = require("./routes/user")

dbConnect()


const app = express()
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.use("/api/", Transactions)
app.use("/api/", Category)
app.use("/api/", User)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});