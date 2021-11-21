import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bookActions } from "../store/book-slice";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import image from "../bookImages/book0.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import SwipeableTextMobileStepper from "./BooksStepper";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Details() {
  const { isbn } = useParams();
  const dispatch = useDispatch();
  dispatch(bookActions.showBook(isbn));
  dispatch(bookActions.handleStepper(isbn));

  const allBooks = useSelector((state) => state.book.books);
  const selectedBook = useSelector((state) => state.book.showSelectedBook);

  console.log(isbn);

  return (
    <Paper sx={{ p: 0, margin: "auto", maxWidth: 800, flexGrow: 1 }}>
      <Grid container>
        <Paper
          sx={{ p: 0.5, "margin-right": "15%", maxWidth: 250, flexGrow: 1 }}
          item
        >
          <Img alt="image" src={image} />
        </Paper>
        <Grid item xs={12} sm container>
          <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
            style={{ textAlign: "left" }}
          >
            <Grid item>
              <Typography
                gutterBottom
                variant="h5"
                style={{ fontWeight: "bold" }}
                component="div"
              >
                {selectedBook[0].title}
              </Typography>

              <Typography variant="body2" gutterBottom>
                {selectedBook[0].description}
              </Typography>

              <Button
                size="small"
                style={{ "margin-right": "2%", "margin-top": "4%" }}
                variant="outlined"
              >
                Favorite
              </Button>

              <Button
                style={{ "margin-top": "4%" }}
                size="small"
                variant="outlined"
              >
                Share
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Typography style={{ border: "0" }} variant="body2">
                Subtitle: {selectedBook[0].subtitle}
              </Typography>
              <Typography style={{ border: "1px" }} variant="body2">
                Year: {selectedBook[0].published.slice(0, 4)}
              </Typography>
              <Typography style={{ "margin-bottom": "3%" }} variant="body2">
                Number of Pages: {selectedBook[0].pages}
              </Typography>

              <Typography style={{ "margin-bottom": "3%" }} variant="body2">
                Publisher: {selectedBook[0].publisher}
              </Typography>

              <Typography variant="body2">
                ISBN: {selectedBook[0].isbn}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          style={{
            "padding-left": "13%",
            "padding-right": "13%",
            "margin-left": "40%",
          }}
          variant="outlined"
        >
          Buy
        </Button>
      </Grid>

      <Box sx={{ display: "flex" }}>
        <AccountCircleOutlinedIcon style={{ "margin-right": "3%" }} />
        <Typography variant="body2">{selectedBook[0].author}</Typography>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Rating
          size="large"
          name="read-only"
          value={selectedBook[0].rating}
          readOnly
        />
      </Box>

      <Box style={{ "margin-top": "5%" }}>
        <Typography textAlign="left" gutterBottom variant="h6" component="div">
          Other Books you may like
        </Typography>
        <SwipeableTextMobileStepper />
      </Box>
    </Paper>
  );
}

export default Details;
