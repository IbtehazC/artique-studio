import {
  AppBar,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { Email, Facebook } from "@material-ui/icons";
import useStyles from "./styles";
import {theme} from "./theme";

export default function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar className={classes.navBar}>
          <div className={classes.navItems}>
            <Typography variant="h5">Swap</Typography>
            <div className={classes.navLinks}>
              <Link style={{textDecoration: 'none'}} to="/">Portfolio</Link>
              <Link style={{textDecoration: 'none'}} to="/about">About</Link>
              <Link style={{textDecoration: 'none'}} to="/contact">Contact</Link>
              <Link style={{textDecoration: 'none'}} to="/upload">Upload</Link>
            </div>
            <div>
              <IconButton>
                <Email />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
