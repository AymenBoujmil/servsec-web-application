import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { useSelector,useDispatch } from "react-redux";
import { getRequests } from '../../actions/requests';



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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ServiceModal = (props)=> {
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(getRequests);
  const [open, setOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const requests = useSelector(state => state.requests);
  const request = requests.find(r=>r.clientId === user.result._id && r.serviceId === props.service._id && r.status ==="Pending");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRequestForm = (e) =>{
    e.preventDefault();
    history.push(`service/Form/${props.service._id}`);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="md" fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.service.sector}
        </DialogTitle>
        <DialogContent dividers>
        <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
          <tbody>
          <tr>
              <th class="pl-0 w-25" scope="row"><strong>Owner</strong></th>
              <td>{props.user? `${props.user.name}` : "not owned yet." }</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Sector</strong></th>
              <td>{props.service.sector}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Description</strong></th>
              <td>{props.service.description}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Price</strong></th>
              <td>{props.service.price} DT</td>
            </tr>
          </tbody>
        </table>
      </div>
        </DialogContent>
        {user.result.role === "Client" ? (        <DialogActions>
        {!request ? (
                    <Button autoFocus onClick={handleRequestForm} color="primary">
                    Contact Service
                  </Button>
        ):
        (<Button autoFocus color="primary" disabled>
        Currently pending request
      </Button>)

        }
        </DialogActions>):null}

      </Dialog>
    </div>
  );
}

export default ServiceModal;
