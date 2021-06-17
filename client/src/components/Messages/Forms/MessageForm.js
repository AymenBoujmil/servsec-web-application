import { React, useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { createMessage } from "../../../api";

const MessageForm = (props) => {
  const {receiver} = props;
  const dispatch = useDispatch()
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem("profile")).result;

  const validationSchema = yup.object({
    title: yup.string("Enter a subject").required("Subject is required"),
    body: yup
      .string("Enter your message")
      .min(1, "A message should be of minimum 1 character length")
      .required("A message is required"),
  });

  const formik = useFormik({
    initialValues: {
      from: user._id,
      to: receiver._id,
      title: "",
      body: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        props.handleClose()
      dispatch(createMessage(values)).then(() => {
          console.log("bravo")
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2>
            Message to :{" "}
            {receiver.role === "Client"
              ? `${receiver.firstname} ${receiver.lastname}`
              : `${receiver.name}`}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignContent: "space-around",
              flexWrap: "wrap",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div style={{ marginBottom: "10px", minWidth: "100%" }}>
              <TextField
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                id="title"
                label="Subject"
                variant="filled"
              />
            </div>
            <div style={{ marginBottom: "10px", minWidth: "100%" }}>
              <TextField
                rows={4}
                fullWidth
                value={formik.values.body}
                onChange={formik.handleChange}
                error={formik.touched.body && Boolean(formik.errors.body)}
                helperText={formik.touched.body && formik.errors.body}
                id="body"
                multiline
                label="Message"
                variant="filled"
              />
            </div>
            <div style={{ marginBottom: "10px", minWidth: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                sizer="medium"
                color="primary"
                style={{ float: "center" }}
                fullWidth
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
