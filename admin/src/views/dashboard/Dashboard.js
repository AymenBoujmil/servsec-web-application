import React, { lazy, useState, useEffect } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { getCategories } from "src/actions/categories";
import { getServices, deleteService } from "src/actions/services";
import { getUsers } from "src/actions/users";
import MainChartExample from "../hwijet/charts/MainChartExample.js";
import { Redirect } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const WidgetsDropdown = lazy(() =>
  import("../hwijet/widgets/WidgetsDropdown.js")
);
const WidgetsBrand = lazy(() => import("../hwijet/widgets/WidgetsBrand.js"));

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  if (!user) return <Redirect to="/login" />;
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-muted">june 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
