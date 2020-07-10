import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter, Link } from "react-router-dom";
import { GlobalContext } from "../../context/globalState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ history }) => {
  const classes = useStyles();
  const { isAuthenticated, setIsAuthenticated } = useContext(GlobalContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              to="/"
            >
              Vartanna
            </Link>
          </Typography>
          {isAuthenticated ? (
            <>
              <Button onClick={() => history.push("/addform")} color="inherit">
                Add Form
              </Button>
              <Button
                onClick={() => history.push("/viewforms")}
                color="inherit"
              >
                View Form
              </Button>
              <Button
                onClick={() => {
                  setIsAuthenticated(false);
                  history.push("/login");
                }}
                color="inherit"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => history.push("/register")} color="inherit">
                Register
              </Button>
              <Button onClick={() => history.push("/login")} color="inherit">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
