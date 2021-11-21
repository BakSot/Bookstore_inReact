var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const books = require("./data/books.json");

var homeRouter = require("./routes/home");
//var bookRouter = require("./routes/book");
var addRouter = require("./routes/add");
var searchRouter = require("./routes/search");
var categoryRouter = require("./routes/category");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", homeRouter);
app.use("/home/category", categoryRouter);
//app.use("/home/book", bookRouter);
app.use("/home/book/add", addRouter);
app.use("/home/search", searchRouter);

//------------- VIEW A BOOK -----------------
app.get("/home/book", async (req, res) => {
  console.log(JSON.stringify(books));

  // const results = await db.query("SELECT JSON_QUERY(@books)");
  res.status(200).json({
    status: "success",
    books: books
  });

  // const results = await db.query("select * from credentials");
  // res.status(200).json({
  //   status: "success",
  //   results: results.rows.length,
  //   book: books
  // })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
