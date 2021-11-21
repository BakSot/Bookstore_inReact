import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";

import { bookActions } from "../store/book-slice";
// import { sendBookData } from "../store/book-actions";

import Notification from "../navigation/Notification";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { textAlign } from "@mui/system";
import { Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import image from "../bookImages/book0.png";
// const MyBox = styled(Box)({
//   margin: "5%",
//   padding: "150px ",
//   border: "1px solid",
//   alignSelf: "left",
// });

// const myTypography = styled(Typography)({
//   margin: "5%",
// });

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

// let isInitial = true;

const AddBook = () => {
  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredSubtitle, setEnteredSubtitle] = useState();
  const [enteredDescription, setEnteredDescription] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();
  const [enteredPublisher, setEnteredPublisher] = useState();
  const [enteredYear, setEnteredYear] = useState();
  const [enteredPages, setEnteredPages] = useState();
  const [enteredRating, setEnteredRating] = useState();
  const [enteredISBN, setEnteredISBN] = useState();
  const [enteredWebsite, setEnteredWebsite] = useState();

  const addTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const addSubtitleHandler = (event) => {
    setEnteredSubtitle(event.target.value);
  };
  const addDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const addAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const addPublisherHandler = (event) => {
    setEnteredPublisher(event.target.value);
  };
  const addPublishedHandler = (event) => {
    setEnteredYear(event.target.value);
  };
  const addPagesHandler = (event) => {
    setEnteredPages(event.target.value);
  };
  const addRatingHandler = (event) => {
    setEnteredRating(event.target.value);
  };
  const addISBNHandler = (event) => {
    setEnteredISBN(event.target.value);
  };
  const websiteHandler = (event) => {
    setEnteredWebsite(event.target.value);
  };

  const saveButtonHandler = () => {
    dispatch(
      bookActions.addBook({
        enteredISBN,
        enteredTitle,
        enteredSubtitle,
        enteredAuthor,
        enteredRating,
        enteredYear,
        enteredPublisher,
        enteredPages,
        enteredDescription,
        enteredWebsite,
      })
    );
  };

  // const addBook = useSelector((state) => state.book.books);
  const notification = useSelector((state) => state.ui.notification);

  // React.useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   dispatch(sendBookData(addBook));
  // }, [addBook, dispatch]);


  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.status}
          message={notification.message}
        />
      )}
      <Typography variant="h5" component="div">
        Add new Title
      </Typography>
      <Box
        sx={{
          p: 5,
          border: "1px solid grey",
          margin: "5%",
          width: "auto",
          height: "auto",
        }}
      >
        <form
        // onSubmit={submitHandler}
        // sx={{ display: "flex", flexDirection: "collumn" }}
        >
          <Grid>
            <Typography style={{ "margin-bottom": "3%" }} variant="h6">
              <TextField
                label="ISBN:"
                variant="standard"
                onChange={addISBNHandler}
              />
            </Typography>
            <Typography style={{ border: "1px" }} variant="h6">
              <TextField
                label="Title:"
                variant="standard"
                onChange={addTitleHandler}
              />
            </Typography>
            <Typography style={{ border: "1px" }} variant="h6">
              <TextField
                label="Subtitle:"
                variant="standard"
                onChange={addSubtitleHandler}
              />
            </Typography>

            <Typography style={{ "margin-bottom": "3%" }} variant="h6">
              <TextField
                label="Author:"
                variant="standard"
                onChange={addAuthorHandler}
              />
            </Typography>
            <Typography style={{ border: "1px" }} variant="h6">
              <TextField
                label="Rating:"
                variant="standard"
                onChange={addRatingHandler}
              />
            </Typography>
            <Typography style={{ border: "1px" }} variant="h6">
              <TextField
                label="Year:"
                variant="standard"
                onChange={addPublishedHandler}
              />
            </Typography>
            <Typography style={{ border: "0" }} variant="h6">
              <TextField
                label="Publisher:"
                variant="standard"
                onChange={addPublisherHandler}
              />
            </Typography>

            <Typography style={{ "margin-bottom": "3%" }} variant="h6">
              <TextField
                label="Number of Pages:"
                variant="standard"
                onChange={addPagesHandler}
              />
            </Typography>
          </Grid>
          <Grid sx={{ display: "grid" }}>
            {/* <Paper sx={{ margin: "15%", maxWidth: 100, flexGrow: 1 }}>
              Import Image .jpg,.png,.gif
            </Paper> */}

            <Typography style={{ "margin-bottom": "3%" }} variant="h6">
              <TextField
                label="Description:"
                variant="standard"
                onChange={addDescriptionHandler}
              />
            </Typography>
            <Typography style={{ "margin-bottom": "3%" }} variant="h6">
              <TextField
                label="Website:"
                variant="standard"
                onChange={websiteHandler}
              />
            </Typography>
          </Grid>

          <Grid item></Grid>
          <Button
            style={{
              "padding-left": "13%",
              "padding-right": "13%",
              "margin-right": "40%",
            }}
            variant="outlined"
            onClick={saveButtonHandler}
          >
            Save
          </Button>
        </form>
      </Box>

      <Button>
        <AddCircleOutlineIcon fontSize="large" />
        Add another book
      </Button>
    </Fragment>
  );
};

export default AddBook;
