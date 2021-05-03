import React from "react";
import MostRequested from "./MostRequested";
import ServiceItem from "./ServiceItem";
import Grid from '@material-ui/core/Grid';
import {useSelector,useDispatch} from 'react-redux';
import { getServices } from "../actions/services";
import ServiceSearch from "./ServiceSearch";

function ServiceList() {
    const services = useSelector(state => state.services);
    console.log(services);
  return (
    <div>
      {/*<MostRequested />*/}
      <Grid container justify="center" spacing={Number(12)}>
        {services.map((value) => (
          <Grid key={value._id} item>
            <ServiceItem service={value}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ServiceList;
