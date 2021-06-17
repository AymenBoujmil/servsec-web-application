import React,{useState} from 'react'
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }));

  const getDate=(timestamp)=>
  {
      var date = new Date(timestamp);
      return date.toGMTString();
  }
function SingleComment(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <ListItemAvatar>
          <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
            <div style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
            <Avatar alt="Remy Sharp" src={props.review.writer.url} />
            <span style={{paddingLeft:'5px'}}>{props.review.writer.role === "Client" ? `${props.review.writer.firstname} ${props.review.writer.lastname}`: props.review.writer.name}  </span>
            </div>
            <Rating readOnly
            fullWidth
            name="rate"
            value={props.review.rate}
            id="rate"
            precision={0.5}
            />
          </div>
        </ListItemAvatar>
        
        <ListItemText
          primary={props.review.comment}
          secondary={
            <React.Fragment>
              {getDate(props.review.timestamp)}
              <br/>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>

            </React.Fragment>
          }
          
        />
        </div>
    )
}

export default SingleComment
