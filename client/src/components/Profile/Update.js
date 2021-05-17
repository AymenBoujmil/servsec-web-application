import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { AiOutlineForm } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/users";
import { useHistory, useLocation } from "react-router-dom";
import UpdateForm from "./Forms/UpdateForm";
import { DELETEMESSAGE } from '../../_constants/actionTypes';
import Signupform from "../authentification/formComponents/Signupform";

function Update() {
  const location=useLocation();
  const thisUser = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("profile")))
  },[location])

  const initState = {
    name:user.result.name,
    firstname: user.result.firstname,
    lastname: user.result.lastname,
    phone: user.result.phone,
    email: user.result.email,
    oldPassword:"",
    password: "",
    confirmPassword: "",
    bio: user.result.bio,
    date:user.result.date,
    role:user.result.role,
    fax:user.result.fax,
    matricule:user.result.matricule,
    address:{
      governorate:user.result.address.governorate,
      city:user.result.address.city,
      street:user.result.address.street
    },
    sector:user.result.sector
  };
 
  const [formData, setformData] = useState(initState);
  const [message, setMessage] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const serverMessage = useSelector((state) =>
    state.message ? state.message : null
  );

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateUser(thisUser.result._id, formData, history));
  };

    useEffect(() => {
      
      if(serverMessage !== null)
      {
        setMessage(serverMessage);
        dispatch({type:DELETEMESSAGE});
      }
  }, [serverMessage])

  const handlechange = (e) => {
    e.preventDefault();
    if (formData.role==="Client")
    {
      if(e.target.name !== "fax" && e.target.name !== "matricule" && e.target.name !== "name" && e.target.name !== "sector" )
      {
          if(e.target.name === "governorate" || e.target.name === "city" || e.target.name === "street" )
            setformData({...formData,address:{...formData.address,[e.target.name]:e.target.value}});               
          else
          setformData({...formData,[e.target.name]:e.target.value});
        }
        
    }
    else
    {
      if (e.target.name !== "firstname" && e.target.name !== "lastname")
      {
        if(e.target.name === "governorate" || e.target.name === "city" || e.target.name === "street" )
            setformData({...formData,address:{...formData.address,[e.target.name]:e.target.value}});               
          else
            setformData({...formData,[e.target.name]:e.target.value});

          
      }       
    }
    setMessage(null);
  };

  const clear = () => {
    setformData(initState);
  };

  return (
    <div className="container card border-0 shadow my-5 card-body p-5" style={{paddingTop:"25px"}} >
      {/* breadcrumb part start*/}
      {message ?(
        message.type === "SUCCESS" ?  (
         <div class="alert alert-success alert-dismissible fade show container" role="alert">
         <strong>Success! </strong> {message.message}
         </div>  
        ): 
        (
          <div class="alert alert-warning alert-dismissible fade show container" role="alert">
        <strong>Error! </strong> {message.message}
        </div>  
         )
      ):null}
      <form onSubmit={handlesubmit}>
          {/*<UpdateForm formData={formData} change={handlechange} clear={clear} /> */}
          <Signupform  clear={clear} handleShowPassword={handleShowPassword} showPassword={showPassword} formData={formData} handlechange={handlechange} isUpdate={true} />
      </form>
      {/*================login_part end =================*/}
    </div>
  );
}

export default Update;
