import React, {useState,useEffect} from 'react';
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
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { fetchServiceReviews } from '../../api';
import SingleComment from './SingleComment';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import CommentForm from './CommentForm';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

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

const CommentModal = (props)=> {

  const classes = useStyles();
  const user=JSON.parse(localStorage.getItem('profile')).result;

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [reviews, setReviews] = useState([]);

  const [loading,setLoading] = useState(true)

  const moy=(table)=>
  {
      var sum=0;
      for(var i=0;i<table.length;i++)
      {
         sum+=table[i].rate;
      }
      console.log(sum);
      console.log(Math.floor(sum/table.length)+0.5);
      setValue(Math.floor(sum/table.length)+0.5);
  }

  useEffect(()=>{
    Promise.all([fetchServiceReviews(props.service._id)])
        .then((res)=>{
        setReviews(res[0].data);
        setLoading(false);
        moy(res[0].data);
        }
        )
  },[])

  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if(loading) return <div> loading ...</div>

  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div>
            <Rating readOnly
            name="hover-feedback"
            value={value}
            precision={0.5}

            />
            </div>
            <img src="img/review.svg" onClick={handleClickOpen} height="30px" width="30px" />
            
       </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="md" fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.service.sector}
        </DialogTitle>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flexGrow:"2"}}>
            <DialogContent dividers>
              <div  style={{overflowY:"scroll",height:"300px"}}>
                {reviews.length <1 ? (<div>No Comments !</div>):(
                <List className={classes.root}>
                {reviews.map((review)=>(
                  <>
                        <ListItem alignItems="flex-start">
                          <SingleComment review={review} />
                        </ListItem>
                      <Divider variant="inset" component="li" />
                      </>
                      ))}
                </List>
                )}
              </div>
            </DialogContent>
          </div>
          <div style={{flexGrow:"1"}} >
            <CommentForm setReviews={setReviews} user={user} service={props.service}/>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default CommentModal;
