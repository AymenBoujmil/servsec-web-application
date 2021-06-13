import React from "react";
import { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { searchServices } from "../../actions/services";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  searchbar: {
    width: "80%",
    marginBottom: "5px",
    top: "10px",
    left: "3%",
    right: "3%",
  },
  center: {
    margin: "auto",
    width: "70%",
    padding: "10px",
  },
}));

const ServiceSearch = (props) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const categories = useSelector(state => state.categories);
  const [searchValue, setSearchValue] = useState("");

  const classes = useStyles();

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  /*const handleChangeSearchValue = (e) => {
    e.preventDefault()
    console.log(e.target.name)
    setSearchValue(e.target.value);
  };*/

  
  const handleSearch = (e) => {
    searchValue ===""?props.setResult(null):
    props.setResult(props.services.filter(s=>s.sector.toLowerCase().includes(searchValue.toLowerCase())))
    console.log(searchValue)
  };

  const handleFilter = (e) => {
    category ===""?props.setResult(null):
    props.setResult(props.services.filter(s=>s.category===category))
    console.log(props.services)
    console.log(props.services.filter(s=>s.category===category))
    console.log(category)
  };  

  return (
    <div className={classes.center}>
      <div className={classes.searchbar}>
        <SearchBar
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
          onRequestSearch={handleSearch}
          placeholder="Search services..."
          onCancelSearch={()=>setSearchValue("")}
        />
      </div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleCategoryChange}
          label="Categories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((cat)=>(
            <MenuItem value={cat._id}>{cat.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <Button variant="filled" color="primary" onClick={handleFilter}>
          Filter
        </Button>
      </FormControl>
    </div>
  );
};

export default ServiceSearch;
