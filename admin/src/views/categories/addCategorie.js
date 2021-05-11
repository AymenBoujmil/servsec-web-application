import { React, useState } from "react";
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
} from "@coreui/react";
export default function AddCategorie() {
  const [label, setLabel] = useState("");
  const [definition, setDefinition] = useState("");
  const handleSubmit = () => {};
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
                  onChange={(e) => setLabel(e.target.value)}
                  value={label}
                />
              </CFormGroup>
              <CFormGroup row>
                <CLabel htmlFor="textarea-input">Textarea</CLabel>
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Content..."
                />
                <CButton type="submit" size="sm" color="success">
                  Submit
                </CButton>
              </CFormGroup>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
