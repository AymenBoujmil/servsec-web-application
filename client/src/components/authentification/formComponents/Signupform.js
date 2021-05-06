import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment, Input } from '@material-ui/core';
import { GoogleLogin} from 'react-google-login';
import './Style.css';

function Signupform({googleSuccess,googleFailure,formData,showPassword,handleShowPassword,handlechange,clear}) {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row'}}>        
                <div className="col-md-6 form-group p_star">
                <input type="text" className="form-control" name="firstname" id="firstname"  value={formData.firstname} required placeholder="First name"  onChange={handlechange}  />
                </div>
                <div className="col-md-6 form-group p_star">
                <input type="text" className="form-control" name="lastname" id="lastname" value={formData.lastname}  required placeholder="name"  onChange={handlechange} />
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
                <div className="col-md-12 form-group">
                
                <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label htmlFor="f-option">Remember me</label>
                </div>
                
                <button type="submit"  className="btn_3">
                    Sign Up
                </button>

                <button  onClick={clear} type='button' className="btn_3">
                        clear
                </button>
                <GoogleLogin
                        clientId="543908818301-5bvljobs122vclkbiqnn8el4l47v6lte.apps.googleusercontent.com"
                        render={(renderProps)=>(
                          <button  className="btn_3"  onClick={renderProps.onClick} disabled={renderProps.disabled} >
                          Google Sign in 
                        </button>)}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        />       
            </div>
      </div>
    )
}

export default Signupform
