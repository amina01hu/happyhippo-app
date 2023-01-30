const uri = "mongodb+srv://amina101:testing123@cluster0.8hb2zk3.mongodb.net/happyhippo-data?retryWrites=true&w=majority";
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const HTTP_PORT = process.env.PORT || 8080;
let User = require('./modules/users');
let Post = require('./modules/posts');

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Database connected!");
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const usersRouter = require('./routes/usercrud');

app.use('/users', usersRouter);

app.listen(HTTP_PORT, () => {
    console.log("API listening on: " + HTTP_PORT)
});