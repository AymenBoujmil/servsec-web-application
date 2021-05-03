import React ,{useState , useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { DELETEMESSAGE } from '../../_constants/actionTypes';
import {forgotPassword} from '../../actions/auth';

function ForgotPassword() {

    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
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
        setEmail(e.target.value);
        setMessage(null);
    }

    const handlesubmit=(e)=>
    {
        e.preventDefault();
        dispatch(forgotPassword({email}));
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
                        <h2 style={{paddingBottom:"25px"}}>Please Write your email address</h2>
                        <input type="email" className="form-control" name="email" id="email" required placeholder="Email"  onChange={handlechange}  />
                        <p style={{paddingtop:"25px"}}>* You will recieve a reset mail on this address, Please make sure its the on you used when creating your account.</p>
                        <button type="submit"  className="btn_3">
                        Verify email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
