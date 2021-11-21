// import { uiActions } from "./ui-slice";
// import { bookActions } from "./book-slice";

// export const fetchBookData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://e-bookst-default-rtdb.firebaseio.com/books.json"
//       );
//       if (!response.ok) {
//         throw new Error("Could not fetch Data!");
//       }
//       const data = await response.json();

//       return data;
//     };
//     try {
//       const bookData = await fetchData();
//       console.log("sdfdf " + JSON.stringify(bookData));
//       dispatch(bookActions.replaceList({ books: bookData.books }));
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error",
//           message: "Fetching Book Data Failed!",
//         })
//       );
//     }
//   };
// };

// export const sendBookData = (addBook) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "warning",
//         title: "Sending...",
//         message: "Sending Book Data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://e-bookst-default-rtdb.firebaseio.com/books.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             books: addBook.books,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending Book Data Failed!");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success...",
//           message: "Sent Book Data Successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error",
//           message: "Sending Book Data Failed!",
//         })
//       );
//     }
//   };
// };
