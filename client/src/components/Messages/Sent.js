import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { fetchMessagesBySender } from "../../api";
import SingleMessage from "./SingleMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const Sent = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile")).result;
    fetchMessagesBySender(user._id).then((res) => {
      setMessages(res.data);
      setLoading(false);
    });
  }, []);
  if (!loading) console.log(messages)
  if (loading) return <div>loading ...</div>;
  return (
    <div>
      {messages.length <1 ? (<div>No messages sent.</div>):(
    <List className={classes.root}>
      {messages.map((message)=>(
        <>
              <ListItem alignItems="flex-start">
                <SingleMessage user={message.to} message={message}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            </>
            ))}
    </List>
    )}
    </div>
  );
};

export default Sent;