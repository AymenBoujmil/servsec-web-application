import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AiOutlineForm } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';
import { signin } from '../../actions/auth';
import { IconButton, TextField, InputAdornment, Input } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { GoogleLogin} from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { AUTH } from '../../_constants/actionTypes';


const initState={
  firstname:'',
  lastname:'',
  phone:'',
  email:'',
  password:'',
  confirmPassword:'',
}
function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [formData, setformData] = useState(initState)
  const [isSignup, setIsSignup] = useState(false);

  const history=useHistory();
  const dispatch = useDispatch();

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

  const handlechange=(e)=>
  {
      setformData({...formData,[e.target.name]:e.target.value});
  }
  
  const clear=()=>
  {
      setformData(initState);
  }

  const switchmode=()=>
  {
      isSignup ? setIsSignup(false) : setIsSignup(true);
      clear();
      setShowPassword(false);
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
  <section className="login_part section_padding ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="login_part_text text-center">
            <div className="login_part_text_iner" style={{width:"10%",height:"400px"}}>
            { isSignup ? (
              <div>
                <h2>Already Have an account ? </h2>
                <a  className="btn_3" onClick={switchmode}>Log in </a>
              </div>
            ) : (
              <div>
                <h2>New to our Shop?</h2>
                <p>There are advances being made in science and technology
                  everyday, and a good example of this is the</p>
                <a  className="btn_3" onClick={switchmode}>Create an Account</a>
              </div>
            ) }    
            </div>
          </div>
        </div>
        <br />
        <div className="col-lg-6 col-md-6">
          <div className="login_part_form">
            <div className="login_part_form_iner">
              
                  <div>
                    <h3 style={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:"25px"}}>{/*Welcome Back ! <br />*/}
                    <Avatar style={{backgroundColor:'purple'}}>
                    { !isSignup ? ( <LockOutlinedIcon /> ) : (<AiOutlineForm />) }
                    </Avatar>
                    { !isSignup ? "Please Sign in now " :  "Please Sign up now " }</h3>
                  </div>
              <form className="row contact_form" onSubmit={handlesubmit} >
              { !isSignup ? (
                <div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" className="form-control" value={formData.email} required id="email" name="email"  placeholder="Email" onChange={handlechange} />
                  </div>
                  <div className="col-md-12 form-group p_star" style={{display:'flex',flexDirection:'row'}}>
                    <Input type={showPassword ? 'text' : 'password'} required className="form-control" value={formData.password}  id="password" name="password"  placeholder="Password" onChange={handlechange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword}>
                            {showPassword ? ( <VisibilityOff /> ) : ( <Visibility />) }
                          </IconButton>
                      </InputAdornment>
                      }   
                    /> 
                  </div>
                </div>
              ): (
                <div>
                    <div style={{display:'flex',flexDirection:'row'}}>        
                        <div className="col-md-6 form-group p_star">
                         <input type="text" className="form-control" name="firstname" id="firstname"  value={formData.firstname} required placeholder="First name"  onChange={handlechange}  />
                        </div>
                        <div className="col-md-6 form-group p_star">
                         <input type="text" className="form-control" name="lastname" id="name" value={formData.name}  required placeholder="name"  onChange={handlechange} />
                        </div>
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input type="email" className="form-control" name="email" id="email" value={formData.email} required placeholder="Email"  onChange={handlechange}  />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input type="number" className="form-control" name="phone" id="phone" value={formData.phone} required placeholder="phone number"  onChange={handlechange}  />
                    </div>
                    <div className="col-md-12 form-group p_star" style={{display:'flex',flexDirection:'row'}}>
                    <Input type={showPassword ? 'text' : 'password'} className="form-control" value={formData.password} id="password" name="password"  placeholder="password"  onChange={handlechange} 
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? ( <VisibilityOff /> ) : ( <Visibility />) }
                        </IconButton>
                    </InputAdornment>
                    }   
                    />
                    </div>
                    <div className="col-md-12 form-group p_star" >
                    <Input type={showPassword ? 'text' : 'password'} required className="form-control"  value={formData.confirmPassword} id="confirmPassword" name="confirmPassword"  placeholder="confirm password" onChange={handlechange} />
                    </div>
                </div>
              )}
                <div className="col-md-12 form-group">
                  {isSignup ? (
                      <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label htmlFor="f-option">Remember me</label>
                    </div>
                   ) :null}
                 
                  <button type="submit"  className="btn_3">
                   {isSignup ? "Sign Up" : "log in"}
                  </button>
                  <button  onClick={clear} type='button' className="btn_3">
                    clear
                  </button>
                  <GoogleLogin
                    clientId="884346847471-8ie7bl2n2ji9grmugc7daivcb7s1hv2b.apps.googleusercontent.com"
                    render={(renderProps)=>(
                      <button  className="btn_3"  onClick={renderProps.onClick} disabled={renderProps.disabled} >
                      Google Sign in 
                     </button>)}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                  {!isSignup ? (<a className="lost_pass" href="#">forget password?</a>) : null}
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================login_part end =================*/}
</div>
  )
}

export default Login


