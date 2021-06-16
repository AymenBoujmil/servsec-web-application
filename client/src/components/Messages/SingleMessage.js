import React,{useState} from 'react'
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from 'react-redux';
import { updateMessage } from '../../actions/messages';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }));


function SingleMessage(props) {
    const [isRead,setRead] = useState(props.message.read)
    const dispatch = useDispatch()

    const handleRead = () =>{
        if(!isRead){
        console.log(props.message._id)
        dispatch(updateMessage(props.message._id))
        setRead(true)
        }
    }

    const classes = useStyles()

    return (
        <div onMouseOver={handleRead} className={classes.root}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.user.url} />
        </ListItemAvatar>
        <ListItemText
          primary={props.message.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.user.role === "Client" ? `${props.user.firstname} ${props.user.lastname}`: props.user.name} - 
              </Typography>
              {props.message.body}
            </React.Fragment>
          }
        />
        </div>
    )
}

export default SingleMessage
