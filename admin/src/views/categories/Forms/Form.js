import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

const Form = ({ formData, change, clear, type }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sector"
            name="label"
            label="Label"
            value={formData.label}
            fullWidth
            autoComplete="sector"
            onChange={change}
            helperText="Please define a specific label for the category"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="description"
            name="definition"
            label="Description"
            rows={4}
            rowsMax={10}
            value={formData.definition}
            fullWidth
            multiline
            autoComplete="Description"
            onChange={change}
          />
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "15px" }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginRight: "5px" }}
        >
          {type}
        </Button>
        <Button
          type="Button"
          variant="contained"
          color="primary"
          onClick={clear}
        >
          Clear
        </Button>
      </Grid>
    </div>
  );
};
export default Form;
