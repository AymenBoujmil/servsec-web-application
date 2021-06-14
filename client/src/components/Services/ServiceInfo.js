import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getServices } from "../../actions/services";
import { getRequests } from "../../actions/requests";
import { getUsers } from "./../../actions/users";
import RequestItem from "./RequestItem";
import * as api from './../../api/index'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ServiceInfo = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [users,setUsers] =useState(null)
  const [service,setService] =useState(null)
  const [requests,setRequests] =useState(null)

  /*const services = useSelector((state) => state.services);
  const service = services.find((s) => s._id === id);
  const users = useSelector((state) => state.users);
  const allRequests = useSelector((state) => state.requests);
  const requests = allRequests.filter((r) => r.serviceId === service._id);*/

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  useEffect(() => {
    AOS.init()
    Promise.all([
      api.fetchUsers(),
      api.fetchServices(),
      api.fetchRequests(),
    ]).then((res) => {
      console.log(res)
      setUsers(res[0].data)
      setService(res[1].data.find(s=>s._id===id))
      setRequests(res[2].data.filter(r=>r.serviceId===id))
      setLoading(false);
    });
  }, []);
  const classes = useStyles();
  /*console.log(services);
  console.log(users);
  console.log(allRequests);
  console.log(users);*/

  if (loading) return <p>loading...</p>;

  return (
    <div className="container card border-0 shadow my-5 card-body p-5" data-aos="fade-left"
    data-aos-duration="1000">
      <h1>Service : {service.sector}</h1>
      <div className={classes.root}>
        {!requests.length ? (<div>No requests for this service.</div>):null}
        {requests.map((req) => {
          let user = users.find((u) => u._id === req.clientId);
          console.log(user);
          return <RequestItem req={req} user={user} />;
        })}
      </div>
    </div>
  );
};

export default ServiceInfo;
