import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const Form=({formData,change,clear,type,categories})=> {

return (
<div>
      <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
            <TextField
              id="category"
              name="category"
              select
              fullwidth
              label="category"
              value={formData.category}
              onChange={change}
              helperText="Please select your category"
            >
              {categories.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
        </Grid>  
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sector"
            name="sector"
            label="Name"
            value={formData.sector}
            fullWidth
            autoComplete="sector"
            onChange={change}
            helperText="Please define a specific sector in the category"
          />
        </Grid>  
        <Grid item xs={12} sm={6}>
        <TextField
          id="price"
          label="Price"
          type="number"
          required
          name="price"
          value={formData.price}
          fullWidth
          onChange={change}
        />
      </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            rows={4}
            rowsMax={10}
            value={formData.description}
            fullWidth
            multiline
            autoComplete="Description"
            onChange={change}
          />
        </Grid>

      </Grid>
      <Grid style={{marginTop:"15px"}}>
      <Button variant="contained" color="primary" type="submit" style={{marginRight:"5px"}}>
          {type}
      </Button>
      <Button type="Button" variant="contained" color="primary" onClick={clear}>
          Clear
      </Button>
      </Grid>
      </div>
  );
}
export default Form;