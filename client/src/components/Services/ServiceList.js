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
    console.log("sending");
    Promise.all([api.fetchServices()]).then((res) => {
      console.log("response", res);
      setServices(res[0].data);
      setLoading(false);
    });
  }, []);

  // Promise.all([api.fetchServices()]).then(res => console.log(res[0].data))
  const classes = useStyles();
  var val;
  if (result == null) val = services;
  else val = result;
  if (loading) return <p>Loading ...</p>;
  
  return (
    <div className="container card border-0 shadow my-5 card-body p-5">
      <ServiceSearch setResult={setResult} services={services}/>
      <div className={classes.root}>
        {/*<MostRequested />*/}
        <Grid
          container
          spacing={Number(12)}
          style={{ margin: "0 auto", width: "95%" }}
        >
          {val.map((value) => (
            <Grid key={value._id} item xs={3}>
              <ServiceItem service={value} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ServiceList;
