import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { IoSend } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getRqData } from "../../../actions/requestsData";
import { createRequest,getRequests,updateRequest } from "../../../actions/requests";
import * as api from './../../../api/index'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function ServiceRequestForm() {
  const today = new Date().toISOString().slice(0, 10);

  const initialForm = {
    reqDate: {
      label: "Request Date",
      type: "date",
      value: today,
    },
    items: [],
    price: {
      label: "Price",
      type: "number",
      value: "",
    },
  };

  const [loading,setLoading] = useState(true)
  const [requestData,setRqDatas] = useState(null);
  const [request,setRequest] = useState(null)
  const [isUpdated,setUpdated] = useState(null)
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const dispatch = useDispatch();

  /*const requestDatas = useSelector((state) =>
  state.rqdatas
  );
  const requests = useSelector((state) =>
  state.requests
  );
  */const user = JSON.parse(localStorage.getItem("profile"));
  /*const request = requests.find(r => r.serviceId === id && r.clientId === user.result._id)
  console.log(requestDatas)
  const requestData = requestDatas.find(r=>r.serviceId===id)
  if(!loading){  requestData.items.forEach((item) =>
    initialForm.items.push({
      ...item,
      value: item.type === "date" ? today : "",
    })
  );}*/



  useEffect(() => {
    Promise.all([api.fetchRqData(),api.fetchRequests()]).then((res)=> {
      console.log(res)
      setRqDatas(res[0].data.find(r=>r.serviceId===id)?
      res[0].data.find(r=>r.serviceId===id):initialForm)
      setRequest(res[1].data.find(r => r.serviceId === id && r.clientId === user.result._id))
      setUpdated(res[1].data.find(r => r.serviceId === id && r.clientId === user.result._id)?true:false)
      setLoading(false);
      console.log(requestData)
    
    })
    ;
  },[]);

  


  const [formData, setFormData] = useState(initialForm);
  
  const history=useHistory();

  const handleChangeDate = (e) => {
    e.preventDefault();
    let updatedDate = formData.reqDate;
    updatedDate.value = e.target.value;
    setFormData({ ...formData, reqDate: updatedDate });
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    let updatedPrice = formData.price;
    updatedPrice.value = e.target.value;
    setFormData({ ...formData, price: updatedPrice });
  };

  const handleChangeField = (e, id) => {
    e.preventDefault();
    let dataItems = { ...formData };
    let items = [...dataItems.items];
    const updatedItems = items.map((i) =>
      i.id === id ? { ...i, value: e.target.value } : i
    );
    dataItems.items = updatedItems;
    setFormData(dataItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var today = new Date();
    var dateTime = today.getFullYear() + "-" + ('0' + (today.getMonth() + 1)).slice(-2) + "-" + ('0' + today.getDate()).slice(-2) + " " + ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
    let data = {
      clientId: JSON.parse(localStorage.getItem('profile')).result._id,
      requestData: requestData,
      timestamp: dateTime,
      serviceId: id,
      status:"Pending"
    };
    console.log(data);
    isUpdated ? api.updateRequest(request._id,data).then(()=>{
      history.push('/profile')
    }):
    api.createRequest(data).then(()=>{
      history.push('/profile')
    });

  };
  if (loading) return (<p>loading...</p>)
  return (
    <div
      className="container card border-0 shadow my-5 card-body p-5"
      style={{ width: "50%" }}
    >
      <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
        <div style={{ float: "center" }}>
          <h4>Please fill the form for this service.</h4>
          <div>
            <div>
              <FormControl className={classes.margin}>
                <label>{requestData.reqDate.label}</label>
                <TextField
                  required
                  label={requestData.reqDate.label}
                  type={requestData.reqDate.type}
                  defaultValue={today}
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => handleChangeDate(e)}
                />
              </FormControl>
            </div>
            {requestData.items.map((item) => (
              <div>
                <FormControl className={classes.margin}>
                  <label>{item.label}</label>
                  {item.type === "date" ? (
                    <TextField
                      required
                      label={item.label}
                      type={item.type}
                      defaultValue={today}
                      variant="filled"
                      onChange={(e) => handleChangeField(e, item.id)}
                    />
                  ) : (
                    <TextField
                      required
                      label={item.label}
                      type={item.type}
                      value={item.value}
                      variant="filled"
                      onChange={(e) => handleChangeField(e, item.id)}
                    />
                  )}
                </FormControl>
              </div>
            ))}
            <div>
              <FormControl className={classes.margin}>
                <label>{requestData.price.label}</label>
                <TextField
                  required
                  label={requestData.price.label}
                  type={requestData.price.type}
                  variant="filled"
                  onChange={(e) => handleChangePrice(e)}
                />
              </FormControl>
            </div>
            <div style={{ float: "right" }}>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                endIcon={<IoSend />}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceRequestForm;
