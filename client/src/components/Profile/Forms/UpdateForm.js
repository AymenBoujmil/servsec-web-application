import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';



const UpdateForm=({formData,change,clear})=> {
  return (
<div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          variant="filled"
            required
            id="firstname"
            name="firstname"
            label="First name"
            value={formData.firstname}
            fullWidth
            autoComplete="given-name"
            onChange={change}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="filled"
            id="lastname"
            name="lastname"
            label="Last name"
            value={formData.lastname}
            fullWidth
            autoComplete="family-name"
            onChange={change}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          variant="filled"
            required
            id="phone"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            fullWidth
            autoComplete="phone number"
            onChange={change}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          variant="filled"
            required
            id="bio"
            name="bio"
            label="Bio"
            multiline
            rows={4}
            rowsMax={10}
            value={formData.bio}
            fullWidth
            autoComplete="bio"
            onChange={change}
          />
        </Grid>

      </Grid>
      <Grid style={{marginTop:"15px"}}>
      <Button variant="contained" color="primary" type="submit">
        Save Changes
      </Button>
      </Grid>
      </div>
  );
}
export default UpdateForm