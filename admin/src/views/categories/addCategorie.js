import { React, useState } from "react";
import Button from "@material-ui/core/Button";

import {
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CContainer,
  CFormText,
  CButton,
  CTextarea,
  CIcon,
} from "@coreui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCategory } from "src/actions/categories";
const initialState = {
  label: "",
  definition: "",
};
export default function AddCategorie() {
  const [cat, setCat] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(cat, history));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setCat({ ...cat, [cat.definition]: e.target.value });
  };
  return (
    <div>
      <CContainer>
        <CRow>
          <CCol sm="12">
            <CForm action="" method="post" onSubmit={handleSubmit}>
              <CFormGroup>
                {" "}
                <CLabel htmlFor="intitule">label</CLabel>
                <CInput
                  type="text"
                  id="label"
                  name="label"
                  placeholder="Enter label.."
                  autoComplete="label"
                  onChange={(e) => setCat({ ...cat, label: e.target.value })}
                  value={cat.label}
                />
              </CFormGroup>
              <CFormGroup row>
                <CLabel htmlFor="textarea-input">Content</CLabel>
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Content..."
                  onChange={(e) =>
                    setCat({ ...cat, definition: e.target.value })
                  }
                  value={cat.definition}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginRight: "5px" }}
                >
                  ADD
                </Button>
              </CFormGroup>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
