import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment, Input } from '@material-ui/core';
import { GoogleLogin} from 'react-google-login';
import {NavLink} from 'react-router-dom'
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
                        clientId="543908818301-5bvljobs122vclkbiqnn8el4l47v6lte.apps.googleusercontent.com"
                        render={(renderProps)=>(
                          <button  className="btn_3"  onClick={renderProps.onClick} disabled={renderProps.disabled} >
                          Google log in 
                        </button>)}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        />  
                        <NavLink
                        className='nav-link'
                        to='/forgotPassword'
                        exact
                        activeStyle={{
                            color: '#795376 ',
                            borderBottom: '3px solid #795376',
                        }}
                         >
                         forget password?
                    </NavLink>               
            </div>
        </>
    )
}

export default Loginform
