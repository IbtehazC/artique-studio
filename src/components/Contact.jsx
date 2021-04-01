import { useState } from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import EmailIcon from "@material-ui/icons/Email";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import Popover from "@material-ui/core/Popover";
import "./contact.css";
import { ThemeProvider } from "@material-ui/styles";
import Email from "./Email";

const Contact = () => {
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
      <ThemeProvider>
        <div className={classes.wrapper}>
          <div className={classes.headerDiv}>
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
          </div>

          <div className={classes.contactDiv}>
            <div className={classes.place}>
              <div className={classes.divCorrection1}>
                <Card className={classes.root}>
                  <CardContent>
                    <a
                      href="https://www.facebook.com/Lienzo.SwapnilTanzim"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        aria-label="Facebook page"
                        className={classes.contactColor}
                      >
                        <div className={classes.flexItemDiv}>
                          <FacebookIcon fontSize={"large"} />
                          <Typography variant="h4" gutterBottom>
                            Facebook
                          </Typography>
                        </div>
                      </IconButton>
                    </a>
                  </CardContent>
                </Card>
                <Card className={classes.rootSecond}>
                  <CardContent>
                    <a
                      href="https://instagram.com/swapnil_tanzim?igshid=w4mr5bh7836r"
                      target="_"
                    >
                      <IconButton
                        aria-label="Instagram page"
                        className={classes.contactColor}
                      >
                        <InstagramIcon fontSize={"large"} />
                      </IconButton>
                    </a>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardContent>
                    <IconButton
                      className={classes.contactColor}
                      aria-label="Email Asddress"
                      onClick={handleClickOpen}
                    >
                      <EmailIcon fontSize={"large"} />
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
                        <Button
                          autoFocus
                          onClick={handleCloseDialog}
                          color="primary"
                        >
                          Okay
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </CardContent>
                </Card>

                <Card className={classes.rootSecond}>
                  <CardContent>
                    <IconButton
                      className={classes.contactColor}
                      aria-describedby={id1}
                      variant="contained"
                      onClick={handleClick}
                    >
                      <PhoneIcon />
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
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="Email">
              <Email />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Contact;
