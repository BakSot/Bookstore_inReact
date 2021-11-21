import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookActions } from "../store/book-slice";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Button, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import image from "../bookImages/book0.png";
import Rating from "@mui/material/Rating";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Details from "./Details";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Search = () => {
  const history = useHistory();
  const [enteredFilter, setEnteredFilter] = useState("");
  const dispatch = useDispatch();

  const filterHandler = (event) => {
    setEnteredFilter(event.target.value);
    // setOpen(true);
  };

  const selectBookHandler = (isbn) => {
    console.log("ISBN is: " + isbn);
    history.push(`./Category/isbn${isbn}`);
  };

  React.useEffect(() => {
    dispatch(bookActions.searchByFilter(enteredFilter));
    console.log(enteredFilter);
  }, [dispatch, enteredFilter]);

  const desiredBook = useSelector((state) => state.book.items);
  const message = useSelector((state) => state.book.message);
  //  const allBooks = useSelector((state) => state.book.books);

  const manageBooks = () => {
    if (message !== "") {
      return <div>{message}</div>;
    }
  };

  return (
    <React.Fragment>
      <Typography
        textAlign="center"
        style={{ fontWeight: "bold" }}
        variant="h5"
      >
        Search to find your new book
      </Typography>

      <Typography textAlign="center" variant="body2"></Typography>
      <Paper
        component="form"
        sx={{
          margin: "5%",
          p: "20px 40px ",
          display: "flex",
          width: "80%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search ..."
          inputProps={{ "aria-label": "search ..." }}
          value={enteredFilter}
          onChange={filterHandler}
        />
      </Paper>

      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        {desiredBook.map((book) => (
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
              <Rating size="sm" name="read-only" value={book.rating} readOnly />
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Search;
