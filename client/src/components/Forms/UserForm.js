import React, { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../../actions/users';
import { useSelector} from 'react-redux';

const UserForm =({ currentId , setCurrentId}) => {

  const [userData, setUserData] = useState({
    firstname:'',
    name:'',
    phone:'',
    email:'',
  })
  const user = useSelector(state => currentId? state.users.find((p)=> p._id===currentId) : null);
  const dispatch = useDispatch();

  useEffect(() => {
     if(user) 
       setUserData(user);
  }, [user])

  const handlesubmit=(e)=>
  {
      e.preventDefault();
      if(currentId)
      {
        dispatch(updateUser(currentId,userData));
      }else
      {
        dispatch(createUser(userData));
      }
      clear();
  }
  const clear=()=>
  {
      setCurrentId(null);
      setUserData({
        firstname:'',
        name:'',
        phone:'',
        email:'',
      });
  }
        return (
          <div>
  {/* breadcrumb part start*/}
  <section className="breadcrumb_part">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb_iner">
            <h2>{ currentId ? 'Edit Account' :'Create Account' } </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb part end*/}
  {/*================CreateAccount_part Area =================*/}
  <div className="container card border-0 shadow my-5 card-body p-5"> 
  <section className="login_part" style={{paddingTop:'25px',paddingLeft:'50px'}}>
      <div className="align-items-center">
          <div className="login_part_form">
            <div className="login_part_form_iner" style={{textAlign:'center'}}>
              <h3>Welcome  ! <br />  Please { currentId ? 'Edit' :'Sign Up' }  now</h3>
              <form className="row contact_form" onSubmit={handlesubmit} noValidate="novalidate">
                <div style={{display:'flex',flexDirection:'row'}}>        
                    <div className="col-md-12 form-group p_star">
                     <input type="text" className="form-control" id="firstname"   placeholder="First name" value={userData.firstname} onChange={(e)=>setUserData({...userData,firstname:e.target.value})} />
                    </div>
                    <div className="col-md-10 form-group p_star">
                     <input type="text" className="form-control" id="name"   placeholder="name" value={userData.name} onChange={(e)=>setUserData({...userData,name:e.target.value})}/>
                    </div>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input type="email" className="form-control" id="email" placeholder="Email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
                </div>
                <div className="col-md-12 form-group p_star">
                  <input type="number" className="form-control" id="phone" placeholder="phone number" value={userData.phone} onChange={(e)=>setUserData({...userData,phone:e.target.value})} />
                </div>
                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="btn_3">
                  { currentId ? 'Edit' :'Sign Up' } 
                  </button>
                  <button  onClick={clear} className="btn_3">
                  Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
  </section>
  </div>
  {/*================login_part end =================*/}
</div>

        )
    }

export default UserForm;