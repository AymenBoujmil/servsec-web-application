import React,{useEffect,useState} from "react";
import MostRequested from "./MostRequested";
import ServiceItem from "./ServiceItem";
import Grid from '@material-ui/core/Grid';
import {useSelector,useDispatch} from 'react-redux';
import ServiceSearch from "./ServiceSearch";
import { makeStyles } from '@material-ui/core/styles';
import { getServices } from '../../actions/services';
import {useLocation} from 'react-router-dom';
import { getRequests } from "../../actions/requests";
import { getCategories } from "../../actions/categories";
import { Redirect} from 'react-router-dom';

function ServiceList() {
  
    const location=useLocation();
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      }
    }
    ))
    const [result, setResult] = useState(null)
    
    useEffect(() => {
      dispatch(getServices());
      dispatch(getRequests())
      dispatch(getCategories())
    }, [location]);

    const classes = useStyles()
    const services = useSelector(state => state.services);
    var val = result ? result : services;
    console.log(services)
    console.log(val)
  return (
    <div className="container card border-0 shadow my-5 card-body p-5">
      <ServiceSearch setResult={setResult} services={services}/>
    <div className={classes.root}>
      {/*<MostRequested />*/}
      <Grid container spacing={Number(12)} style={{margin:"0 auto",width:"95%"}} >
        {val.map((value) => (
          <Grid key={value._id} item xs={3}>
            <ServiceItem service={value}/>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
}

export default ServiceList;
