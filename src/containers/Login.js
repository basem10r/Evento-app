import React, { useEffect, useContext, useState } from 'react';
import Logo from '../assets/images/logo.png';
import Jumpotron from '../components/login/Jumpotron';
import Shape from '../assets/images/shape.png'
import background from '../assets/images/login-bg.png';
import google from '../assets/images/google.png'
import { strings } from '../static/Strings';
import { signInWithGoogle } from '../services/auth.service';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            setredirect('/events')
        }
    }, [user])
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div className="e-login d-flex  flex-row flex-nowrap align-items-stretch">
            {/* right wing  */}
            <div className="e-login__left col d-flex align-items-center justify-content-center px-0">
                <div className="e-login__cont mx-auto">
                    <div className="e-logo">
                        <img className="e-logo__img" alt="logo" src={Logo}></img>
                    </div>
                    <Jumpotron />
                    {/* google sign in button  */}
                    <div className="e-login__btn">
                        <button onClick={signInWithGoogle}><img alt="google" src={google}></img>{strings.SIGN_GOOGLE}</button>
                    </div>
                </div>
            </div>
            {/* left wing  */}
            <div
                className="e-login__right col d-flex justify-content-center align-items-center px-0"
                style={{ backgroundImage: `url(${background})` }}
            >
                <img alt="shape" src={Shape}></img>
            </div>
        </div>
    )
}

export default Login
