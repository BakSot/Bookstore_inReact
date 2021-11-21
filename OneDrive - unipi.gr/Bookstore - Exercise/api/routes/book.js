var express = require("express");
var router = express.Router();
const books = require("../data/books.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("VIEW A BOOK");
  console.log(JSON.stringify(books.books))
  try {
    
    res.status(200).json({
      status: "success",
      data: {
        books: books.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
