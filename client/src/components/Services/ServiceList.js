import React,{useEffect} from "react";
import MostRequested from "./MostRequested";
import ServiceItem from "./ServiceItem";
import Grid from '@material-ui/core/Grid';
import {useSelector,useDispatch} from 'react-redux';
import ServiceSearch from "./ServiceSearch";
import { getServices } from '../../actions/services';
import {useLocation} from 'react-router-dom';

function ServiceList() {
    const location=useLocation();
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getServices());
    }, [location]);

    const services = useSelector(state => state.services);

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
