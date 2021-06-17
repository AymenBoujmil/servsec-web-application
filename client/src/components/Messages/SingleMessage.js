import React,{useState,useEffect} from 'react'
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from 'react-redux';
import { updateMessage } from '../../actions/messages';
import MessageModal from './Forms/MessageModal';
import  AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding:"10px",
      "&:hover":{
        borderRadius:"5px",
        backgroundColor:"#f6f6f6",
        //border: "2px solid #b08ead",
      }
    },
    inline: {
      display: "inline",
    },
  }));


function SingleMessage(props) {
  useEffect(()=>{
    AOS.init()
  })
    const [isRead,setRead] = useState(props.message.read)
    const dispatch = useDispatch()
    var date = new Date(props.message.timestamp)

    const handleRead = () =>{
        if(!isRead){
        console.log(props.message._id)
        dispatch(updateMessage(props.message._id))
        setRead(true)
        }
    }

    const classes = useStyles()
    let msg = props.message.body.split('\n').map(i => {
      return <p>{i}</p>
  });
  console.log(props.comingFrom)
    return (
        <div onMouseOver={props.comingFrom==="Inbox"?handleRead:null} className={classes.root} data-aos="fade-up">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.user.url} />
        </ListItemAvatar>
        {!isRead && props.comingFrom === "Inbox"? (<h5 style={{float:"right",color:"red"}}>New!</h5>):null}
        <ListItemText
          primary={`Subject : ${props.message.title}`}
          secondary={
            <React.Fragment>
                            <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sent on {date.toUTCString()}
              </Typography>
              <br/>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.comingFrom === "Inbox" ? 
                props.user.role === "Client" ? `From : ${props.user.firstname} ${props.user.lastname}`: `From : ${props.user.name}`
              :props.user.role === "Client" ? `To : ${props.user.firstname} ${props.user.lastname}`: `To : ${props.user.name}`
              }
              </Typography>
              <div style={{border:"0.5px grey solid",borderRadius:"20px",backgroundColor:"#ececec",padding:"2%",marginTop:"5px"}}>
              {msg}
              </div>
              {props.comingFrom === "Inbox" ? (
                              <div style={{float:"right",marginTop:"5px"}}>
                                <MessageModal receiver={props.user} text="Reply"/>
                              </div>
              ):null}

            </React.Fragment>
          }
        />
        </div>
    )
}

export default SingleMessage
