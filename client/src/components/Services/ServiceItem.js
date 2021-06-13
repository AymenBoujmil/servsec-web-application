import React,{useState,useEffect} from "react";
import {useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {fetchUsers} from './../../api/index'
import ServiceModal from "./ServiceModal";
import ProviderModal from './../Users/ProviderModal'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom:"10px",
    width: "95%",
    flexGrow: 1,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
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



const ServiceItem = (props) => {
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    fetchUsers().then((res)=>{
      console.log(res)
      setUser(res.data.find(u=>u._id===props.service.owner));
      setLoading(false);
    }
    )
  },[])


  const classes = useStyles();
  console.log(user);
if (loading) return <div></div>
  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <ProviderModal user={user}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
           
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.service.sector}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  { user ? `${user.name}` : null }
                </Typography>
                <Typography variant="subtitle1">
                {props.service.price} DT
              </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <ServiceModal service={props.service} user={user} />
                </Typography>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default ServiceItem;