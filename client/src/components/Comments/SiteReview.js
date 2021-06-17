import {React,useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { createReview } from "../../actions/reviews";
import { useFormik } from 'formik';
import * as yup from 'yup';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useHistory} from 'react-router-dom';

export default function SiteReview() {
        useEffect(()=>{
            AOS.init()
        })
        const history=useHistory();
        const dispatch = useDispatch()
        const user = JSON.parse(localStorage.getItem("profile"))
        const [isSent,setSent] = useState(false)
        
        const validationSchema = yup.object({
          name: yup
            .string('Enter your name')
            .required('Name is required'),
            message: yup
            .string('Enter your message')
            .required('A message is required'),
        });
        
          const formik = useFormik({
            initialValues: {
              name: user? (user.result.role ==="Client"? `${user.result.firstname} ${user.result.lastname}`:`${user.result.name}` ):"",
              message:""
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
              console.log(values);
              dispatch(createReview(values)).then(()=>{
                  setSent(true);
                  history.push('/')
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
                <h1>Write your review</h1>
                <h4>Let us know what you think ...</h4>
                <br></br>
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
                    placeholder="Name"
                    variant="outlined"/>
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
                    placeholder="Review"
                    variant="outlined"
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
