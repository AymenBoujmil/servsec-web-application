import React from 'react'

function Banner({isSignup,switchmode}) {
    return (
        <div className="login_part_text text-center">
            <div className="login_part_text_iner" style={{width:"10%",height:"400px"}}>
            { isSignup ? (
              <div>
                <h2>Already Have an account ? </h2>
                <a  className="btn_3" onClick={switchmode}>Log in </a>
              </div>
            ) : (
              <div>
                <h2>New to our Web App?</h2>
                <p>There are advances being made in science and technology
                  everyday, and a good example of this is the</p>
                <a  className="btn_3" onClick={switchmode}>Create an Account</a>
              </div>
            ) }    
            </div>
          </div>
    )
}

export default Banner;
