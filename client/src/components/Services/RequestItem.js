import {React,useState} from 'react'
import { MuiThemeProvider } from "material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AccordionActions, Button } from "@material-ui/core";
import { getUsers } from "./../../actions/users";
import { red, green } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { manageRequest } from "../../actions/requests";

const RequestItem=(props) =>{

  const dispatch = useDispatch();
    
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const handleAccept = (req,e) =>{
    if(isAcceptEnabled){
    e.preventDefault()
    req={...req,status:"In Progress"};
    console.log(req);
    setAcceptEnabled(true)
    setRefuseEnabled(false)
    setAcceptBtnTxt("Accepted");
    dispatch(manageRequest(req._id,req));
    }
}
const handleRefuse = (req,e) =>{
    if(isRefuseEnabled){
    e.preventDefault()
    req={...req,status:"Refused"};
    console.log(req);
    setAcceptEnabled(false)
    setRefuseEnabled(true)
    setRefuseBtnTxt("Refused");
    dispatch(manageRequest(req._id,req));
    }
}

  const [isAcceptEnabled,setAcceptEnabled] = useState(props.req.status==="Pending");
  const [isRefuseEnabled,setRefuseEnabled] = useState(props.req.status==="Pending");
  const [acceptButtonText,setAcceptBtnTxt] = useState("Accept");
  const [refuseButtonText,setRefuseBtnTxt] = useState("Refuse");

  const classes = useStyles();
  const acceptTheme = createMuiTheme({ palette: { primary: green } });
  const refuseTheme = createMuiTheme({ palette: { primary: red } });

    return (
        <Accordion key={props.req._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={`panel1a-header`}
          >
            <Typography className={classes.heading}>
              {props.req.status ==="Pending" || props.req.status ==="Pending" ?
              `Currenlty ${props.req.status}`:`${props.req.status}`} : {props.user.firstname} {props.user.lastname}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              <h3>Details</h3>
            </div>
            <hr/>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <div class="row">
                  <div class="col md-9">
                    <h6>{props.req.requestData.reqDate.label}</h6>
                  </div>
                  <div class="col md-9">
                    {props.req.requestData.reqDate.value
                      ? `${props.req.requestData.reqDate.value}`
                      : "Unavailable"}
                  </div>
                </div>
                <hr/>
                {props.req.requestData.items.map((item) => {
                  return (
                    <>
                    <div class="row">
                      <div class="col md-9">
                        <h6>{item.label}</h6>
                      </div>
                      <div class="col md-9">
                        {item.value ? `${item.value}` : "Unavailable"}
                      </div>
                    </div>
                    <hr/>
                    </>
                  );
                })}

                <div class="row">
                  <div class="col md-9">
                    <h6>{props.req.requestData.price.label}</h6>
                  </div>
                  <div class="col md-9">
                    {props.req.requestData.price.value
                      ? `${props.req.requestData.price.value}`
                      : "Unavailable"}
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <div style={{ justifyItems: "center", alignItems: "center" }}>
              <div>
                <span>
                  <MuiThemeProvider theme={acceptTheme}>
                    <Button
                      className={classes.button}
                      type="submit"
                      variant="raised"
                      color="primary"
                      size="medium"
                      //style={{color:"#50C878"}}
                      style={{color:"#50C878",display : !isAcceptEnabled ? "none":"initial"}}
                      startIcon={<FiCheck />}
                      onClick={(e)=>handleAccept(props.req,e)}
                      disabled={!isRefuseEnabled}
                    >
                      {acceptButtonText}
                    </Button>
                  </MuiThemeProvider>
                </span>
                <span>
                  <MuiThemeProvider theme={refuseTheme}>
                    <Button
                      className={classes.button}
                      variant="raised"
                      color="primary"
                      style={{color:"#F52B00",display : !isRefuseEnabled ? "none":"initial"}}
                      size="medium"
                      startIcon={<FiX />}
                      onClick={(e)=>handleRefuse(props.req,e)}
                      disabled={!isAcceptEnabled}
                    >
                      {refuseButtonText}
                    </Button>
                  </MuiThemeProvider>
                </span>
              </div>
            </div>
          </AccordionActions>
        </Accordion>
      );
}


export default RequestItem
