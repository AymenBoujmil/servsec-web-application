import React from "react";
import {useState} from 'react'
import SearchBar from 'material-ui-search-bar'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    searchbar: {
        width:"80%",
        marginBottom:"5px",
        top: "10px",
        left: "3%",
        right: "3%",
      },
      center :{
        margin: "auto",
        width: "70%",
        padding: "10px",
      },
  }));
  

const ServiceSearch=()=> {
    const [category, setCategory] = useState("")
    const [region, setRegion] = useState("")

const classes=useStyles()

const handleRegionChange = (e) =>{
    setRegion(e.target.value)
}

const handleCategoryChange = (e) =>{
    setCategory(e.target.value)
}

  return (
      <div className={classes.center}>
    <div className={classes.searchbar}>
        <SearchBar
        placeholder="Search services..."
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
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Home Services">Home Services</MenuItem>
          <MenuItem value="Food Delivery">Food Delivery</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={region}
          onChange={handleRegionChange}
          label="Region"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Tunis">Tunis</MenuItem>
          <MenuItem value="Sousse">Sousse</MenuItem>
          <MenuItem value="Monastir">Monastir</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ServiceSearch;
