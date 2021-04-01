import { useState } from "react";
import {
  Typography,
  IconButton,
  Button,
  Chip,
  Popover,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ThemeProvider,
} from "@material-ui/core";
import useStyles from "./styles";
import { Email, Facebook, Instagram, Phone } from "@material-ui/icons";
import { theme } from "./theme";

const About = () => {
  const classes = useStyles();

  const [on, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id1 = open ? "simple-popover" : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <div>
            <div className={classes.headerDiv}>
              <Typography className={classes.title} variant="h4" gutterBottom>
                Swapnil
              </Typography>
            </div>
            <div className={classes.summaryDiv}>
              <Typography
                className={classes.summary}
                variant="subtitle2"
                gutterBottom
              >
                "Laborum aute exercitation anim minim officia. Cupidatat
                exercitation nulla sunt cupidatat sit ad eiusmod. Culpa dolor
                occaecat veniam irure fugiat magna laborum nisi voluptate
                commodo. Ut veniam do aliquip occaecat nostrud. Sunt sint
                commodo ullamco do ipsum occaecat tempor ut aliqua et do do ea.
                Aliquip velit et irure cillum irure aliqua mollit elit pariatur
                magna mollit occaecat culpa. Est ut non ex id nisi reprehenderit
                esse.zzz"
              </Typography>
            </div>
          </div>

          <div className={classes.headerDiv}>
            <Typography variant="h4" gutterBottom>
              Contacts
            </Typography>
          </div>
          <div className={classes.flexItemDiv}>
            <div className={classes.contactIcons}>
              <IconButton
                className={classes.icons}
                aria-label="Email Address"
                onClick={handleClickOpen}
              >
                <Email fontSize="large" />
              </IconButton>
              <Dialog
                onClose={handleCloseDialog}
                aria-labelledby="customized-dialog-title"
                open={on}
              >
                <DialogTitle
                  id="customized-dialog-title"
                  onClose={handleCloseDialog}
                >
                  Email Address
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    omartanzimzahid@gmail.com
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCloseDialog} color="primary">
                    Okay
                  </Button>
                </DialogActions>
              </Dialog>
              <a
                href="https://www.facebook.com/Lienzo.SwapnilTanzim"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton
                  aria-label="Facebook page"
                  className={classes.icons}
                >
                  <Facebook fontSize="large" />
                </IconButton>
              </a>
              <a
                href="https://instagram.com/swapnil_tanzim?igshid=w4mr5bh7836r"
                target="_"
              >
                <IconButton
                  aria-label="Instagram page"
                  className={classes.icons}
                >
                  <Instagram fontSize="large" />
                </IconButton>
              </a>
              <IconButton
                className={classes.icons}
                aria-describedby={id1}
                variant="contained"
                onClick={handleClick}
              >
                <Phone fontSize="large" />
              </IconButton>
              <Popover
                id={id1}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography id={id1} className={classes.typography}>
                  Swapnil Tanzim:01681040146
                </Typography>
              </Popover>
            </div>
          </div>

          <Typography className={classes.headerDiv} variant="h4" gutterBottom>
            Skills
          </Typography>
          <div className={classes.flexItemDiv}>
            <div className={classes.chip}>
              <Chip variant="default" label="Art" />
              <Chip variant="default" label="Sketching" />
              <Chip variant="default" label="Mural" />
              <Chip variant="default" label="Ladder Climbing" />
            </div>
          </div>

          <Typography className={classes.headerDiv} variant="h4" gutterBottom>
            Software
          </Typography>
          <div className={classes.flexItemDiv}>
            <div className={classes.chip}>
              <img
                src="https://img.icons8.com/material-sharp/100/000000/adobe-photoshop.png"
                alt="photoshop icon"
              />
              <img
                src="https://img.icons8.com/color/96/000000/adobe-illustrator.png"
                alt="illustrrator icon"
              />
              <img
                src="https://img.icons8.com/nolan/96/3ds-max.png"
                alt="3dsMax icon"
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default About;
