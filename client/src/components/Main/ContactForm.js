import {React,useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { createContact } from "../../actions/contacts";
import { useFormik } from 'formik';
import * as yup from 'yup';
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactForm=()=> {
useEffect(()=>{
  AOS.init()
})
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"))
  const role= user? user.result.role : null
  /*const initialForm = {
    name: user? `${user.result.firstname} ${user.result.lastname}`:"",
    email: user? `${user.result.email}`:"",
    message: "",
  };
  const handleChangeName = (e) =>{
      setFormData({...formData,name:e.target.value});
      console.log(formData);
  }
  const handleChangeEmail = (e) =>{
    setFormData({...formData,email:e.target.value});
    console.log(formData);
}
const handleChangeMessage = (e) =>{
    setFormData({...formData,message:e.target.value});
    console.log(formData);
}*/
/*const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(createContact(formData)).then(()=>{
        setSent(true)
    })
} */

  //const [formData, setFormData] = useState(initialForm);
  const [isSent,setSent] = useState(false)

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required'),
      email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
      message: yup
      .string('Enter your message')
      .min(40, 'A message should be of minimum 40 characters length')
      .required('A message is required'),
  });
  
    const formik = useFormik({
      initialValues: {
        name: user? (user.result.role ==="Client"? `${user.result.firstname} ${user.result.lastname}`:`${user.result.name}` ):"",
        email: user? `${user.result.email}`:"",
        message:""
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        dispatch(createContact(values)).then(()=>{
            setSent(true)
      },
    )
    }
    }
    )





  return (
      <div className="container card border-0 shadow my-5 card-body p-5" style={{width:'50%'}} data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom">
    <form onSubmit={formik.handleSubmit}>
      <div>
          {isSent ? (<div class="alert alert-success" role="alert">
  Your message has been sent!
</div>): null}
          <h1>Contact Us</h1>
          <h2>Please submit this form.</h2>
          <div style={{display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          alignContent:"space-around",
          flexWrap:"wrap",width:"100%",margin:"0 auto"}}>
              <div style={{marginBottom:"10px",minWidth:"100%"}}>
              <TextField 
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              id="name"
              label="Name"
              variant="filled"/>
              </div>
              <div style={{marginBottom:"10px",minWidth:"100%"}}>
              <TextField
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              id="email"
              label="Email"
              variant="filled"
              />
              </div>
              <div style={{marginBottom:"10px",minWidth:"100%"}}>
              <TextField
              rows={4}
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              id="message" 
              multiline
              label="Message"
              variant="filled"
              />
              </div>
              <div style={{marginBottom:"10px",minWidth:"100%"}}>
              <Button type="submit" variant="contained" sizer="medium" color="primary" style={{float:"center"}} fullWidth>
                  Submit
              </Button>
              </div>
          </div>
      </div>
    </form>
    </div>
  );
}

export default ContactForm;
