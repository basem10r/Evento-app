import React from 'react';
import Logo from '../assets/images/sidemenu-logo.png';
import Avatar from '../assets/images/avatar.jpg';
import { FaSignOutAlt } from 'react-icons/fa'
const SideMenu = () => {
    return (
        <div className="e-sidemenu d-flex flex-column justify-content-between">
            <div className="e-logo d-flex justify-content-center align-items-center">
                <img alt="logo" className="e-logo__img" src={Logo}></img>
            </div>
            <div className="d-flex flex-column">
                <div className="e-avatar d-flex align-items-center justify-content-center">
                    <img alt="avatar" src={Avatar} className="e-avatar__img"></img>
                </div>
                <div className="e-logout d-flex align-items-center justify-content-center">
                    <FaSignOutAlt cursor="pointer" />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
