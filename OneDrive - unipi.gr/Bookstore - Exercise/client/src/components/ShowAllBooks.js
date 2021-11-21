import * as React from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "./Search";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Rating from "@mui/material/Rating";
import image from "../bookImages/book0.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ShowAllBooks = () => {
  const history = useHistory();

  const allBooks = useSelector((state) => state.book.books);
  const message = useSelector((state) => state.book.message);
  const desiredBook = useSelector((state) => state.book.items);

  const selectBookHandler = (isbn) => {
    console.log("ISBN is: " + isbn);
    history.push(`./Category/isbn${isbn}`);
  };

  return (
    <Paper sx={{ p: 0, margin: "auto", flexGrow: 1 }}>
      <Search />
      {desiredBook.length <= 0 ? (
        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
          {allBooks.map((book) => (
            <Grid sx={{ p: 0.5, margin: "2%", minWidth: 100, flexGrow: 1 }}>
              <Button
                sx={{ p: 0.5 }}
                item
                onClick={() => {
                  selectBookHandler(book.isbn);
                }}
              >
                <Img alt="image" src={image} />
              </Button>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2">{book.title}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Rating
                  size="sm"
                  name="read-only"
                  value={book.rating}
                  readOnly
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        allBooks.length === 0 && <div>{message}</div>
      )}
    </Paper>
  );
};
export default ShowAllBooks;
