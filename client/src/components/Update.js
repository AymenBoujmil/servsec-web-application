import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { AiOutlineForm } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/users";
import { useHistory, useLocation } from "react-router-dom";
import UpdateForm from "./UpdateForm";

function Update() {
  const location=useLocation();
  const thisUser = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
useEffect(()=>{
  setUser(JSON.parse(localStorage.getItem("profile")))
},[location])

  console.log(thisUser);

  const initState = {
    firstname: user.result.firstname,
    lastname: user.result.lastname,
    phone: user.result.phone,
    email: user.result.email,
    password: "123",
    confirmPassword: "123",
    bio: user.result.bio,
  };
  console.log(initState);

  const [formData, setformData] = useState(initState);
  const [message, setMessage] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const serverMessage = useSelector((state) =>
    state.message ? state.message : null
  );

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(thisUser.result._id, formData, history));
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
      <form onSubmit={handlesubmit}>
        <UpdateForm formData={formData} change={handlechange} clear={clear} />
      </form>
      {/*================login_part end =================*/}
    </div>
  );
}

export default Update;
