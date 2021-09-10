import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { clientId } from '../../static/ClientId';
import { strings } from '../../static/Strings';

const LoginBtn = (isSignedIn) => {
    const onSuccess = (res) => {
        // initialize the setup 
        debugger;
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('user', JSON.stringify(res.profileObj));
    }
    const onFailure = (res) => {
        console.log('login failed error : ', res);
    }
    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText={strings.SIGN_GOOGLE}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={isSignedIn}
            />
        </>
    )
}

export default LoginBtn
