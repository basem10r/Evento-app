import React from 'react';
import Logo from '../assets/images/logo.png';
import Jumpotron from '../components/login/Jumpotron';
import Shape from '../components/login/Shape';
import background from '../assets/images/login-bg.png'

const Login = () => {
    return (
        <div className="e-login d-flex flex-row flex-nowrap align-items-stretch">
            {/* right wing  */}
            <div className="e-login__left col d-flex align-items-center justify-content-center px-0">
                <div className="e-login__cont mx-auto">
                    <div className="e-logo">
                        <img className="e-logo__img" alt="logo" src={Logo}></img>
                    </div>
                    <Jumpotron />
                </div>
            </div>
            {/* left wing  */}
            <div
                className="e-login__right col d-flex justify-content-center align-items-center px-0"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Shape />
            </div>
        </div>
    )
}

export default Login
