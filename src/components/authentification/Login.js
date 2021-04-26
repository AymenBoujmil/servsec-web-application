import React, { useState , useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AiOutlineForm } from 'react-icons/ai';
import { useDispatch , useSelector } from 'react-redux';
import { createUser } from '../../actions/users';
import { signin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import { AUTH } from '../../_constants/actionTypes';
import Banner from './formComponents/Banner';
import Loginform from './formComponents/Loginform';
import Signupform from './formComponents/Signupform';


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
  const [message, setMessage] = useState(null);

  const history=useHistory();
  const dispatch = useDispatch();

  const serverMessage = useSelector(state => state.message? state.message : null);

  useEffect(() => {
      
      if(serverMessage !== null)
      {
        setMessage(serverMessage);
        dispatch({type:"DELETEMESSAGE"});
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

  const handlechange=(e)=>
  {
      setformData({...formData,[e.target.name]:e.target.value});
      setMessage(null);

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
  <section className="login_part section_padding ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <Banner switchmode={switchmode} isSignup={isSignup} />
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="login_part_form">
                <div className="login_part_form_iner">
                  <div>
                    <h3 style={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:"25px"}}>{/*Welcome Back ! <br />*/}
                    <Avatar style={{backgroundColor:'purple'}}>
                    { !isSignup ? ( <LockOutlinedIcon /> ) : (<AiOutlineForm />) }
                    </Avatar>
                    { !isSignup ? "Please Sign in now " :  "Please Sign up now " }</h3>
                    {message ?(
                      <div class="alert alert-warning alert-dismissible fade show container" role="alert">
                      <strong>Error</strong> {message.message}
                      </div>     
                    ):null}
                  </div>
                  <form className="row contact_form" onSubmit={handlesubmit} >
                      { !isSignup ? (
                        <Loginform googleSuccess={googleSuccess} clear={clear} handlechange={handlechange} showPassword={showPassword} formData={formData} handleShowPassword={handleShowPassword} />
                      ): (
                        <Signupform googleFailure={googleFailure} clear={clear} handleShowPassword={handleShowPassword} showPassword={showPassword} formData={formData} handlechange={handlechange} />
                      )}
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


