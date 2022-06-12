const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();





app.enable("trust proxy");

app.use(
  cors({
    origin: "http://167.71.79.125",
    credentials: true,
  })
);

// app.use(bodyParser.json());
// app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.ejs');
  });

//console.log(req.cookies.toString);

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log(req.cookies);
//   next(); 
// });
const DB = "mongodb://abdulhakeem:250520**%2F%2FKk@167.71.79.125:27017/twd?authSource=admin&connectTimeoutMS=50000";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true, 
  })
  .then(() => console.log("connected to the database!!!!!!!!"));
 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));








