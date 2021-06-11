import React from "react";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import { getRqData } from "../actions/requestsData";
import { useSelector } from "react-redux";
import { createRqData, updateRqData } from "../actions/requestsData";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function RequestForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const classes = useStyles();
  const history = useHistory();

  const types = ["text", "date", "color", "number"];

  const initialForm = {
    reqDate: {
      label: "Request Date",
      type: "date",
    },
    items: [],
    price: {
      label: "Price",
      type: "number",
    },
    serviceId: id,
  };
  const location = useLocation();
  const requestItems = useSelector((state) =>
    state.rqdatas.find((r) => r.serviceId === id)
  );
  const [formItems, setFormItems] = useState(
    requestItems ? requestItems : initialForm
  );

  const [isUpdated, setUpdated] = useState(requestItems !== undefined);

  useEffect(() => {
    dispatch(getRqData());
  }, [location]);

  const handleAddItem = (e) => {
    e.preventDefault();
    let fItems = { ...formItems };
    let items = [...fItems.items];
    items.push({ id: uuid(), label: `Field ${items.length}`, type: "text" });
    fItems.items = items;
    setFormItems(fItems);
  };

  const handleChangeLabel = (e, id) => {
    e.preventDefault();
    let fItems = { ...formItems };
    let items = [...fItems.items];
    const updatedItems = items.map((i) =>
      i.id === id ? { ...i, label: e.target.value } : i
    );
    fItems.items = updatedItems;
    setFormItems(fItems);
  };

  const handleChangeType = (e, id) => {
    e.preventDefault();
    let fItems = { ...formItems };
    let items = [...fItems.items];
    const updatedItems = items.map((i) =>
      i.id === id ? { ...i, type: e.target.value } : i
    );
    fItems.items = updatedItems;
    setFormItems(fItems);
    console.log(formItems.items);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    let fItems = { ...formItems };
    let items = [...fItems.items];
    const updatedItems = items.filter((i) => i.id !== id);
    fItems.items = updatedItems;
    setFormItems(fItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdated) {
      dispatch(updateRqData(formItems._id, formItems, history));
    } else {
      dispatch(createRqData(formItems, history));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container card border-0 shadow my-5 card-body p-5">
        <h1>Request Form</h1>
        <div className="alert alert-light" role="alert">
        Please Configure your request form
        </div>
        <div>
          <FormControl className={classes.margin}>
            <TextField
              label={formItems.reqDate.label}
              variant="filled"
              disabled
            />
          </FormControl>
          <FormControl variant="filled" className={classes.margin} disabled>
            <InputLabel id="demo-customized-select-label">Type</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="types"
              value="date"
            >
              <MenuItem value="date">date</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <div>
            <ul>
              {formItems.items.length !== 0 ? (
                formItems.items.map((item) => (
                  <li key={item.id}>
                    <FormControl className={classes.margin}>
                      <TextField
                        id={item.id}
                        label="Field"
                        variant="filled"
                        value={item.label}
                        onChange={(e) => handleChangeLabel(e, item.id)}
                      />
                    </FormControl>
                    {/*<input
                      type="text"
                      id={item.id}
                      placeholder={item.label}
                      onChange={(e) => handleChangeLabel(e, item.id)}
                    />*/}
                    <FormControl variant="filled" className={classes.margin}>
                      <InputLabel id="demo-customized-select-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-customized-select-label"
                        id="types"
                        value={item.type}
                        onChange={(e) => handleChangeType(e, item.id)}
                      >
                        {types.map((type) => (
                          <MenuItem value={type}>{type}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <span style={{ float: "right" }}>
                      <FormControl className={classes.margin}>
                        <Button
                          onClick={(e) => handleDelete(e, item.id)}
                          variant="outlined"
                          color="secondary"
                        >
                          Delete
                        </Button>
                      </FormControl>
                    </span>
                    {/*<label for="types">Choose a type:</label>
                    <select
                      name="types"
                      id="types"
                      onChange={(e) => handleChangeType(e, item.id)}
                    >
                      {types.map((type) => (
                        <option value={type}>{type}</option>
                      ))}
                      </select>*/}
                    {/*<button onClick={(e) => handleDelete(e, item.id)}>
                      Delete
                    </button>*/}
                  </li>
                ))
              ) : (
                <p>No items.</p>
              )}
            </ul>
            <div>
            <Button variant="outlined" color="primary" onClick={handleAddItem}>
            Add Field
          </Button>
          </div>
            <div>
              <FormControl className={classes.margin}>
                <TextField
                  label={formItems.price.label}
                  variant="filled"
                  disabled
                />
              </FormControl>
              <FormControl variant="filled" className={classes.margin} disabled>
                <InputLabel id="demo-customized-select-label">Type</InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="types"
                  value="number"
                >
                  <MenuItem value="number">number</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div>
        <Button
          className="col-md-3 form-group p_star"
          style={{marginTop:"5px",float:"right"}}
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save Changes
        </Button>
        </div>
      </div>
    </form>
  );
}

export default RequestForm;
