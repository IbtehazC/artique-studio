import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import Chip from "@material-ui/core/Chip";
import Popover from "@material-ui/core/Popover";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const About = () => {
  const classes = useStyles();

  const [on, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <div className={classes.wrapper}>
        <div>
          <Typography variant="h4" gutterBottom>
            Summary
          </Typography>

          <Typography
            className={classes.summary}
            variant="subtitle2"
            gutterBottom
          >
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </Typography>
        </div>

        <div>
          <Typography className={classes.contact} variant="h4" gutterBottom>
            Contacts
          </Typography>

          <IconButton
            className={classes.contactColor}
            aria-label="Email Asddress"
            onClick={handleClickOpen}
          >
            <EmailIcon />
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
              <Typography gutterBottom>omartanzimzahid@gmail.com</Typography>
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
              className={classes.contactColor}
            >
              <FacebookIcon />
            </IconButton>
          </a>
          <a
            href="https://instagram.com/swapnil_tanzim?igshid=w4mr5bh7836r"
            target="_"
          >
            <IconButton
              aria-label="Instagram page"
              className={classes.contactColor}
            >
              <InstagramIcon />
            </IconButton>
          </a>
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
        </div>
        <Typography className={classes.contact} variant="h4" gutterBottom>
          Skills
        </Typography>
        <div className={classes.chip}>
          <Chip variant="default" label="Art" />
          <Chip variant="default" label="Sketching" />
          <Chip variant="default" label="Mural" />
          <Chip variant="default" label="Ladder Climbing" />
        </div>
        <Typography className={classes.contact} variant="h4" gutterBottom>
          Software
        </Typography>
        <div>
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
    </>
  );
};

export default About;
