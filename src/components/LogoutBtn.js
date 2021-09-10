import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../static/ClientId';

const LogoutBtn = () => {
    const onSuccess = (res) => {
        console.log('logout made successfull');
    }
    return (
        <>
            <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={onSuccess}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default LogoutBtn
