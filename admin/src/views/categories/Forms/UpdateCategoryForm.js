import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { DELETEMESSAGE } from "../../../_constants/actionTypes";
import Form from "./Form";
import { updateCategory } from "../../../actions/categories";

function UpdateServiceForm() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const serverMessage = useSelector((state) =>
    state.message ? state.message : null
  );

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const category = useSelector((state) =>
    state.categories.find((s) => s._id === id)
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const initState = {
    label: category.label,
    // owner: user.result._id,
    definition: category.definition,
  };

  const [formData, setformData] = useState(initState);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (serverMessage !== null) {
      setMessage(serverMessage);
      dispatch({ type: DELETEMESSAGE });
    }
  }, [serverMessage]);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategory(category._id, formData, history));
  };

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    setMessage(null);
  };

  const clear = () => {
    setformData(initState);
  };

  return (
    <div className="container card border-0 shadow my-5 card-body p-5">
      {/* breadcrumb part start*/}
      {message ? (
        <div
          class="alert alert-warning alert-dismissible fade show container"
          role="alert"
        >
          <strong>Error! </strong> {message.message}
        </div>
      ) : null}
      <form onSubmit={handlesubmit}>
        <Form
          formData={formData}
          change={handlechange}
          clear={clear}
          type="Update Service"
        />
      </form>
      {/*================login_part end =================*/}
    </div>
  );
}

export default UpdateServiceForm;
