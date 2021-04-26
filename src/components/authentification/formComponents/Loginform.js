import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment, Input } from '@material-ui/core';
import { GoogleLogin} from 'react-google-login';
function Loginform({googleSuccess,googleFailure,formData,handlechange,showPassword,handleShowPassword,clear}) {
    return (
        <>
            <div className="col-md-12 form-group p_star">
                <input type="text" className="form-control" value={formData.email} required id="email" name="email"  placeholder="Email" onChange={handlechange} />
            </div>
                <div className="col-md-12 form-group p_star" style={{display:'flex',flexDirection:'row'}}>
                    <Input type={showPassword ? 'text' : 'password'}  required className="form-control" value={formData.password}  id="password" name="password"  placeholder="Password" onChange={handlechange}
                     endAdornment={
                    <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword}>
                            {showPassword ? ( <VisibilityOff /> ) : ( <Visibility />) }
                          </IconButton>
                      </InputAdornment>
                      }   
                    /> 
                </div>
           <div className="col-md-12 form-group">       
                <button type="submit"  className="btn_3">
                    log in
                </button>
                <button  onClick={clear} type='button' className="btn_3">
                    clear
                </button>
                <GoogleLogin
                        clientId="884346847471-8ie7bl2n2ji9grmugc7daivcb7s1hv2b.apps.googleusercontent.com"
                        render={(renderProps)=>(
                          <button  className="btn_3"  onClick={renderProps.onClick} disabled={renderProps.disabled} >
                          Google log in 
                        </button>)}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        />  
                <a className="lost_pass" href="#">forget password?</a>
            </div>
        </>
    )
}

export default Loginform
