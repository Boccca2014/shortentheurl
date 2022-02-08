require("dotenv").config(); // Loads .env file

const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes/routes");
const path = require("path");

const API_PORT = process.env.PORT || 4567;
const app = express();
app.use(cors());

// this is our MongoDB database
const adminName = process.env.DB_ADMIN_NAME;
const password = process.env.DB_ADMIN_PASSWORD;
const dbname = process.env.DB_ADMIN_DB;
const dbRoute = `mongodb+srv://${adminName}:${password}@tinyurl-api.xaguz.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/")));

// append /api for our http requests
app.use("/api", routes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
