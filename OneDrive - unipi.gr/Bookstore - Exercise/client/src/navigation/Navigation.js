import * as React from "react";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { withRouter } from "react-router";

const Navigation = (props) => {
  //destructuring the props coming from react-router
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/*maps through "pathnames" to get the name and the index, 
            which represent the current URL */}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography color="text.primary" key={name}>
            {name}
          </Typography>
        ) : (
          <Link
            underline="hover"
            color="inherit"
            key={name}
            onClick={() => history.push(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

// High order Compontent "withRouter" --> gives access to router
export default withRouter(Navigation);
