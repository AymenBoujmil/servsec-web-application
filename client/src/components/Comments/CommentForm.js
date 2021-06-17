import {React,useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { createServiceReview } from "../../actions/serviceReviews";
import { useFormik } from 'formik';
import * as yup from 'yup';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useHistory} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { fetchServiceReviews } from "../../api";

export default function CommentForm({ setReviews,user,service}) {
        useEffect(()=>{
            AOS.init()
        })
        const history=useHistory();
        const dispatch = useDispatch()
        const [isSent,setSent] = useState(false)

        useEffect(() => {
          fetchServiceReviews(service._id).then(res =>{
            setReviews(res.data);
          })       
        }, [isSent])

        const validationSchema = yup.object({
          comment: yup
            .string('Enter your comment')
            .required('A comment is required'),
        });
          const formik = useFormik({
            initialValues: {
              comment:"",
              writer:user._id,
              serviceid:service._id,
              rate:0,
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
              console.log(values);
              dispatch(createServiceReview(values)).then(()=>{
                  setSent(!isSent);
                  history.push('/serviceList')
            },
          )
          }
          }
          )

        return (
            <div className="container" style={{width:'100%'}} data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
          <form onSubmit={formik.handleSubmit}>
            <div>
                <h5>Write your own comment</h5>
                <br></br>
                <div style={{display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                alignContent:"space-around",
                flexWrap:"wrap",width:"100%",margin:"0 auto"}}>

                    <div style={{marginBottom:"10px",minWidth:"100%"}}>
                      <TextField
                      rows={7}
                      fullWidth
                      value={formik.values.comment}
                      onChange={formik.handleChange}
                      error={formik.touched.comment && Boolean(formik.errors.comment)}
                      helperText={formik.touched.comment && formik.errors.comment}
                      id="comment" 
                      multiline
                      placeholder="Review"
                      variant="outlined"
                      />
                    </div>

                    <div style={{marginBottom:"10px",minWidth:"100%"}}>
                      <Rating 
                      fullWidth
                      name="rate"
                      value={formik.values.rate}
                      onChange={formik.handleChange}
                      id="rate"
                      precision={0.5}
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
