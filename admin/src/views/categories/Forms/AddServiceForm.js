import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { AiOutlineForm } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {DELETEMESSAGE} from '../../../_constants/actionTypes';
import Form from './Form';
import {createService} from '../../../actions/services';
import { getCategories } from "../../../actions/categories";


function AddServiceForm() {

  const history = useHistory();
  const dispatch = useDispatch();
  const location=useLocation();

  const serverMessage = useSelector(state => state.message? state.message : null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


  const categories = useSelector(state => state.categories);

  console.log(categories);
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("profile")))
  },[location])
  
  const initState = {
    category:"",
    owner: user.result._id,
    sector: "",
    description:"",
    price:"",
  };

  const [formData, setformData] = useState(initState);
  const [message, setMessage] = useState(null);


  useEffect(() => {
      
    if(serverMessage !== null)
    {
      setMessage(serverMessage);
      dispatch({type:DELETEMESSAGE});
    }
  }, [serverMessage])

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(createService(formData,history));
  };

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    setMessage(null);
  };

  const clear = () => {
    setformData(initState);
  };

  return (
    <div className="container card border-0 shadow my-5 card-body p-5" >
      {/* breadcrumb part start*/}
      {message ?(
          <div class="alert alert-warning alert-dismissible fade show container" role="alert">
          <strong>Error! </strong> {message.message}
          </div>  
        ): null}
      <form onSubmit={handlesubmit}>
        <Form formData={formData} change={handlechange} clear={clear} type="Add Service" categories={categories} />
      </form>
      {/*================login_part end =================*/}
    </div>
  );
}

export default AddServiceForm;
