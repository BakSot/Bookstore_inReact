import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import ShowAllBooks from "./components/ShowAllBooks";
import Navigation from "./navigation/Navigation";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import Details from "./components/Details";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchBookData } from "./store/book-actions";
// import { sendBookData } from "./store/book-actions";

// let isInitial = true;

const App = () => {
  // const dispatch = useDispatch();
  // const addBook = useSelector((state) => state.book);
  // useEffect(() => {
  //   dispatch(fetchBookData());
  // }, [dispatch]);

  // React.useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   if (addBook.changed) {
  //     dispatch(sendBookData(addBook));
  //   }
  // }, [addBook, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <h1>Bookstore</h1>
        </Header>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/home/category/isbn:isbn">
            <Details />
          </Route>
          <Route exact path="/home/book/add">
            <AddBook />
          </Route>
          <Route exact path="/home/search">
            <ShowAllBooks />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
