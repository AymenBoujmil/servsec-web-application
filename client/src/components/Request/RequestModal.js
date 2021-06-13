import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { useHistory} from "react-router";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import { updateRequest } from "../../api/index";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

const RequestModal = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [isPending, setPending] = React.useState(
    props.request.status === "Pending"
  );
  const ownerName = `${props.owner.firstname} ${props.owner.lastname}`;
  console.log(props.request);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRequestForm = (e) => {
    e.preventDefault();
    history.push(`service/Form/${props.service._id}`);
  };

  const handleRequestCancel = (e) => {
    e.preventDefault()
    const canceledRequest= {...props.request,status : "Canceled"}
    console.log(canceledRequest)
    updateRequest(canceledRequest._id,canceledRequest,history).then(()=>{
      history.push("/profile");
    });
  };

  return (
    <div>
      {/*<Button variant="contained" style={{backgroundColor:colors[`${props.request.status}`],color:"white"}} onClick={handleClickOpen} fullWidth >
        {props.service.sector}
  </Button>*/}

      <Tooltip title="See Details">
        <IconButton aria-label="see details" size="small">
          <MoreVertIcon onClick={handleClickOpen}>
          </MoreVertIcon>
        </IconButton>
      </Tooltip>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.service.sector}
        </DialogTitle>
        <DialogContent dividers>
          <div class="table-responsive">
            <table class="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Service Name</strong>
                  </th>
                  <td>
                    {props.service.sector
                      ? `${props.service.sector}`
                      : "Unavailable"}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Service Name</strong>
                  </th>
                  <td>
                    {props.service.description
                      ? `${props.service.description}`
                      : "Unavailable"}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Owner</strong>
                  </th>
                  <td>{ownerName ? `${ownerName}` : "not owned yet."}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>{props.request.requestData.reqDate.label}</strong>
                  </th>
                  <td>
                    {ownerName
                      ? `${props.request.requestData.reqDate.value}`
                      : "not available"}
                  </td>
                </tr>
                {props.request.requestData.items.map((item) => (
                  <tr>
                    <th class="pl-0 w-25" scope="row">
                      <strong>{item.label}</strong>
                    </th>
                    <td>{item.value}</td>
                  </tr>
                ))}

                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>{props.request.requestData.price.label}</strong>
                  </th>
                  <td>{props.request.requestData.price.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          {isPending ? (
            <>
            <Button autoFocus onClick={handleRequestForm} color="primary">
              Change request data
            </Button>
            <Button autoFocus onClick={handleRequestCancel} color="primary">
              Cancel Request
            </Button>
            </>
          ) : (
            <Button
              autoFocus
              /*onClick={handleRequestForm}*/ color="primary"
              disabled
            >
              Request {props.request.status}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RequestModal;
