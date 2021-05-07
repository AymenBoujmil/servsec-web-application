import React from "react";
import {useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
<<<<<<< HEAD:client/src/components/ServiceItem.js
import ServiceModal from "../ServiceModal";

=======
import ServiceModal from "./ServiceModal";
import {useSelector} from "react-redux";
>>>>>>> dev:client/src/components/Services/ServiceItem.js
const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    flexGrow: 1,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));



const ServiceItem = (props) => {
  console.log(props.service);
  const user = useSelector(state => state.users.find((u)=>u._id===props.service.owner));
  console.log(user);
  const classes = useStyles();
<<<<<<< HEAD:client/src/components/ServiceItem.js
=======
  const user = useSelector(state => state.users.find((u)=>u.services[0]===props.service._id));
>>>>>>> dev:client/src/components/Services/ServiceItem.js
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://davidwilsondmd.com/wp-content/uploads/2015/11/user.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
           <div
                  class="modal fade"
                  id="exampleModalLong"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          {props.service.sector}
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">{props.service.description}</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Arrange Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.service.sector}
                </Typography>
<<<<<<< HEAD:client/src/components/ServiceItem.js
                
                <Typography variant="body1" gutterBottom>

                  { user? `${user.firstname} ` : "Fullstack Developer"}
                </Typography>
                <Typography variant="body1" gutterBottom>

                { user? `${user.lastname}` : ""}
=======
                <Typography variant="body2" gutterBottom>
                  { user ? `${user.firstname} ${user.lastname}` : "Fullstack Developer" }
>>>>>>> dev:client/src/components/Services/ServiceItem.js
                </Typography>

              </Grid>
              <Grid item>
                <Typography variant="body2">
<<<<<<< HEAD:client/src/components/ServiceItem.js
                  <ServiceModal service={props.service} user={user}/>
=======
                  <ServiceModal service={props.service} />
>>>>>>> dev:client/src/components/Services/ServiceItem.js
                </Typography>

              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {props.service.price} DT
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default ServiceItem;
