import React, { useState , useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AiOutlineForm } from 'react-icons/ai';
import { useDispatch , useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AUTH, DELETEMESSAGE } from '../../_constants/actionTypes';
import Banner from './formComponents/Banner';
import Loginform from './formComponents/Loginform';
import Signupform from './formComponents/Signupform';
import {createUser} from '../../actions/users';
import {signin} from '../../actions/auth';

const initState={
  name:'',
  firstname:'',
  lastname:'',
  phone:'',
  email:'',
  password:'',
  confirmPassword:'',
  date:'',
  role:'Client',
  fax:'',
  matricule:'',
  address:{
    governorate:'Tunis',
    city:'Tunis',
    street:''
  },
  sector:''
}
function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [formData, setformData] = useState(initState)
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState(null);

  const history=useHistory();
  const location=useLocation();
  const dispatch = useDispatch();

  const serverMessage = useSelector(state => state.message? state.message : null);

  useEffect(() => {
    clear();
    setIsSignup(false);
  } , [location])

  useEffect(() => {
    
      if(serverMessage !== null)
      {
        setMessage(serverMessage);
        dispatch({type:DELETEMESSAGE});
      }
  }, [serverMessage])

  const handlesubmit=(e)=>
  {
      e.preventDefault();
      if(isSignup)
      {
        dispatch(createUser(formData,history));
      }
      else
      {
        dispatch(signin(formData,history));
      }
  }

  const clear=()=>
  {
      setformData(initState);
  }

  const handlechange=(e)=>
  {
    if(e.target.name === "role")
    {
      setformData({
        name:'',
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:'',
        date:'',
        role:e.target.value,
        fax:'',
        matricule:'',
        address:{
          governorate:'Tunis',
          city:'Tunis',
          street:''
        },
        sector:''
      })
    }
    else if (formData.role==="Client")
    {
      if(e.target.name !== "fax" && e.target.name !== "matricule" && e.target.name !== "name" && e.target.name !== "sector" )
      {
          if(e.target.name === "governorate" || e.target.name === "city" || e.target.name === "street" )
            setformData({...formData,address:{...formData.address,[e.target.name]:e.target.value}});               
          else
          setformData({...formData,[e.target.name]:e.target.value});
        }
        
    }
    else
    {
      if (e.target.name !== "firstname" && e.target.name !== "lastname")
      {
        if(e.target.name === "governorate" || e.target.name === "city" || e.target.name === "street" )
            setformData({...formData,address:{...formData.address,[e.target.name]:e.target.value}});               
          else
          setformData({...formData,[e.target.name]:e.target.value});
      }       
    }
    setMessage(null);
  }
  

  const switchmode=()=>
  {
      isSignup ? setIsSignup(false) : setIsSignup(true);
      clear();
      setShowPassword(false);
      setMessage(null);
  }

  const googleSuccess= async (res)=>{
    const result = res?.profileOBJ;
    const token  = res?.tokenId;
    try {
      dispatch({ type: AUTH,data:{result,token}});
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }  
  const googleFailure=()=>{
    console.log("Google sign in was unsuccessful. Try later !")
  }

  return (
    <div>
  {/* breadcrumb part start*/}
  <section className="breadcrumb_part">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb_iner">
            <h2>{ isSignup ? "Signup" : "Login" } </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb part end*/}
  {/*================login_part Area =================*/}
  <div className="container card border-0 shadow my-5 card-body p-5" >
  <section className="login_part ">
    <div className="container">
      <div className="row align-items-center">
          <Banner switchmode={switchmode} isSignup={isSignup} />
          <div className="login_part_form">
                <div className="login_part_form_iner">
                  <div>
                    <h3 style={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:"25px"}}>{/*Welcome Back ! <br />*/}
                    <Avatar style={{backgroundColor:'purple'}}>
                    { !isSignup ? ( <LockOutlinedIcon /> ) : (<AiOutlineForm />) }
                    </Avatar>
                    { !isSignup ? "Please Sign in now " :  "Please Sign up now " }</h3>
                    {message ?(
                       message.type === "SUCCESS" ?  (
                        <div class="alert alert-success alert-dismissible fade show container" role="alert">
                        <strong>Success! </strong> {message.message}
                        </div>  
                       ): 
                       (
                         <div class="alert alert-warning alert-dismissible fade show container" role="alert">
                       <strong>Error! </strong> {message.message}
                       </div>  
                        )
                    ):null}
                  </div>
                  <form className="row contact_form" onSubmit={handlesubmit} >
                      { !isSignup ? (
                        <Loginform googleSuccess={googleSuccess} googleFailure={googleFailure}  clear={clear} handlechange={handlechange} showPassword={showPassword} formData={formData} handleShowPassword={handleShowPassword} />
                      ): (
                        <Signupform googleSuccess={googleSuccess} googleFailure={googleFailure} clear={clear} handleShowPassword={handleShowPassword} showPassword={showPassword} formData={formData} handlechange={handlechange} isUpdate={false} />
                      )}
                    </form>
                </div>
          </div>
      </div>
    </div>
  </section>
  </div>
  {/*================login_part end =================*/}
</div>
  )
}

export default Login


