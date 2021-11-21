import * as React from "react";
import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (props) => {
  return (
    <Fragment>
      {props.status === "success" ? (
        <Alert severity="success" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      ) : props.status === "error" ? (
        <Alert severity="error" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      ) : (
        props.status === "warning" && (
          <Alert severity="warning" sx={{ width: "100%" }}>
            {props.message} — <strong>check it out!</strong>
          </Alert>
        )
      )}
    </Fragment>
  );
};
export default Notification;
