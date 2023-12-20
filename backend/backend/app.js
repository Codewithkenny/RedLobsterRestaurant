const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const userRoute = require('./routes/user')
const bookingsRoutes = require("./routes/bookings");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();


// middlewares
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(()=> {
    console.log('Connected to MongoDB');
  })
  .catch((err) =>{
    console.error(`Error connecting to MongoDB: ${err}`);
    });



app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", userRoute);
app.use("/api/bookings", bookingsRoutes);




app.listen(port, () => {
  console.log(`connected to server on ${port}`);
});

