import React from 'react'
import './style.scss'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Link, Route, Routes} from 'react-router-dom';

function Login() {
    const responseFacebook = (response) => {
        console.log(response);
    }
      const onSuccess = res => {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj);       
      }

      const onFailure = res => {
        console.log('LOGIN FAILED! res: ', res);
      }
    return (
        <div className='main'>
            <Link to="/"><ion-icon name="home-outline"></ion-icon></Link>
            <div className="login-label">
                <h2>LOGIN</h2>
            </div>
            <div className="form-container">
                <form action="">
                    <p className='label'>Email <span className='star'>*</span></p>
                    <input className='login-form' type="email" name='email' />
                    <p className='label'>Password <span className='star'>*</span></p>
                    <input className='login-form password' type="password" />
                    <a className='forgot-password' href=" ">Forgot Password?</a>
                    <button className='btn-login'>LOGIN</button>
                    <p className='have-account'>Don't have an account, register
                        <a className='here' href=" ">here</a></p>
                    <div className="other-choices">
                        <hr />
                        <p>Or login with</p>
                        <hr />
                    </div>
                    <div className="fb-gmail">
                        <FacebookLogin

                            appId="1088597931155576"
                            textButton='Facebook'
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={renderProps => (

                                <button className='fb-button' onClick={renderProps.onClick}>Facebook</button>
                            )}
                        />
                         {/* <GoogleLogin
                            clientId="234564224405-ap1dvr6pf2muh01cs98h4uhop41c1o70.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />,  */}
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login