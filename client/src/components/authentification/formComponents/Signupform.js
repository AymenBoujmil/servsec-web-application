import React , { useState , useEffect} from 'react'
import { Select , InputLabel} from '@material-ui/core';
import { GoogleLogin} from 'react-google-login';
import './Style.css';
import ClientForm from './ClientForm';
import EntrepriseForm from './EntrepriseForm';
import cities from '../../../_utils/Cities.json';

function Signupform({googleSuccess,googleFailure,formData,showPassword,handleShowPassword,handlechange,clear,isUpdate}) {
    
    const [governorate, setGovernorate] = useState([]);

    useEffect(() => {
        var arr = [];
          Object.keys(cities).forEach(function(key) {
            arr.push(cities[key]);
          });
        setGovernorate(arr[0]);
      }, []);

    return (
        <div>
            {isUpdate ? (
              null
            ) : (
              <div className="col-md-6 form-group p_star" >
                <InputLabel htmlFor="role">Select your identity</InputLabel>
                <Select
                native
                required
                value={formData.role}
                className="form-control"
                onChange={handlechange}
                inputProps={{
                    name: 'role',
                    id: 'role',
                }}
                >
                <option value="Client">Client</option>
                <option value="Entreprise">Entreprise</option>

                </Select>
            </div>
            )}
            
            { formData.role === "Client" ? (
                <ClientForm handlechange={handlechange} handleShowPassword={handleShowPassword} showPassword={showPassword} formData={formData} governorate={governorate} isUpdate={isUpdate}/>
            ) : (
                <EntrepriseForm handlechange={handlechange} handleShowPassword={handleShowPassword} showPassword={showPassword} formData={formData} governorate={governorate} isUpdate={isUpdate} />
            )}
            

            <div className="col-md-12 form-group">
              { /* 
                <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label htmlFor="f-option">Remember me</label>
                </div>*/
              } 
                <button type="submit"  className="btn_3">
                    {isUpdate ? "Update Info ": "Sign Up"}
                </button>

                <button  onClick={clear} type='button' className="btn_3">
                        clear
                </button>
                {isUpdate ? null :(
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
                )}
                 
            </div>
      </div>
    )
}

export default Signupform
