import React ,{useState , useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { DELETEMESSAGE } from '../../_constants/actionTypes';
import {forgotPassword, resetPassword} from '../../actions/auth';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment, Input } from '@material-ui/core';
import {useHistory,useParams } from 'react-router-dom';


const initState={
    password:'',
    confirmPassword:'',
}

function ResetPassword() {
    const {token}=useParams();
    const [formData, setformData] = useState(initState);
    const [message, setMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const dispatch = useDispatch();
    const history=useHistory();
    const serverMessage = useSelector(state => state.message? state.message : null);

  
    useEffect(() => {
      
        if(serverMessage !== null)
        {
            setMessage(serverMessage);
            dispatch({type:DELETEMESSAGE});
        }
    }, [serverMessage])
  
    
  
    const handlechange=(e)=>
    {
        setformData({...formData,[e.target.name]:e.target.value});
        setMessage(null);
    }
    

    const handlesubmit=(e)=>
    {
        e.preventDefault(); 
        dispatch(resetPassword(formData,history,'Bearer '+token));
    }

    return (
        <div>
           
            <div className="container card border-0 shadow my-5 card-body p-5"  > 
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
                
                <form className="row contact_form" onSubmit={handlesubmit} style={{display:"flex",justifyContent:'center'}}>
                    <div className="col-md-6 form-group p_star">
                        <div className="col-md-12 form-group p_star" style={{display:'flex',flexDirection:'row'}}>
                            <Input type={showPassword ? 'text' : 'password'} className="form-control" id="password" name="password"  placeholder="password"  onChange={handlechange} 
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
                                <Input type={showPassword ? 'text' : 'password'} required className="form-control" id="confirmPassword" name="confirmPassword"  placeholder="confirm password" onChange={handlechange} />
                        </div>
                
                        <button type="submit"  className="btn_3">
                        Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
