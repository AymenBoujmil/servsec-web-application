import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  }));
  


const ProviderModal=(props) =>{
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <div>
      <img
      alt="complex"
      className={classes.img} 
      src={props.user.url || "img/user.png"}
      onClick={handleClickOpen}
      />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.user.name}
        </DialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
            <h3>Registration Number :</h3>
            {props.user.matricule}
          </Typography>
          <Typography gutterBottom>
            <h3>Founded in :</h3>
            {props.user.date}
          </Typography>
          <Typography gutterBottom>
            <h3>Bio :</h3>
            {props.user.bio}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProviderModal;