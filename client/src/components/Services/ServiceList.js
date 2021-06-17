import React, { useEffect, useState } from "react";
import MostRequested from "./MostRequested";
import ServiceItem from "./ServiceItem";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import ServiceSearch from "./ServiceSearch";
import { makeStyles } from "@material-ui/core/styles";
import { getServices } from "../../actions/services";
import { useLocation } from "react-router-dom";
import { getRequests } from "../../actions/requests";
import { getCategories } from "../../actions/categories";
import * as api from "./../../api/index";
import {Redirect} from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import  LinearProgress  from "@material-ui/core/LinearProgress";

function ServiceList() {

  const location = useLocation();
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    AOS.init()
    Promise.all([api.fetchServices()]).then((res) => {
      setServices(res[0].data);
      setLoading(false);
    });
  }, []);

  // Promise.all([api.fetchServices()]).then(res => console.log(res[0].data))
  const classes = useStyles();
  var val;
  if (result == null) val = services;
  else val = result;
  const user=JSON.parse(localStorage.getItem('profile'));
  if (user === null)
  return(
    <Redirect to="/"></Redirect> 
  )
  if (loading) return (<LinearProgress style={{width:"100%"}}/>);
  return (
    <div className="container card border-0 shadow my-5 card-body p-5" data-aos="fade-up">
      <ServiceSearch setResult={setResult} services={services}/>
      <div className={classes.root}>
        {/*<MostRequested />*/}
        <Grid
          container
          spacing={Number(3)}
          alignItems="stretch"
        >
          {val.map((value) => (
            <Grid key={value._id} item xs={3}  >
              <ServiceItem service={value} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ServiceList;
