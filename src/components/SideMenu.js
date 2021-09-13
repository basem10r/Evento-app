import React, { useContext } from 'react';
import Logo from '../assets/images/sidemenu-logo.png';
import { Avatar } from '@material-ui/core';
import { FaSignOutAlt } from 'react-icons/fa'
import { UserContext } from '../providers/UserProvider';
import { logOut } from '../services/auth.service';
const SideMenu = () => {
    let user = useContext(UserContext);
    return (
        <div className="e-sidemenu d-flex flex-row flex-md-column justify-content-between">
            <div className="e-logo d-flex justify-content-center align-items-center">
                <img alt="logo" className="e-logo__img" src={Logo}></img>
            </div>
            <div className="d-flex flex-row flex-md-column align-items-center">
                <div className="e-avatar d-flex align-items-center justify-content-center">
                    {
                        user.image ?
                            <Avatar src={user.image}></Avatar> :
                            <Avatar>{user.shortName}</Avatar>
                    }
                </div>
                <div className="e-logout d-flex align-items-center justify-content-center">
                    <a className="e-sidemenu__logout" href="/" onClick={logOut}><FaSignOutAlt cursor="pointer" /></a>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
