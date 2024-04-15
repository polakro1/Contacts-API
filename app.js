const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");

const contactsRouter = require("./routes/contacts");
const usersRouter = require("./routes/users");
const mongoose = require("mongoose").default;

const app = express();

//sessionConfiguration
const secret = "secret";
const sessionConfiguration = {
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/contacts")
  .catch((error) => console.log(error));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(sessionConfiguration));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // sends error as json
  console.log(err.message);
  console.log(err);
  res.status(err.status || 500).json(err);
});

module.exports = app;
