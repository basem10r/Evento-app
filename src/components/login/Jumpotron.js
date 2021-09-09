import React from 'react';
import { strings } from '../../static/Strings';
import Google from '../../assets/images/google.png';
import Facebook from '../../assets/images/facebook.png';

const Jumpotron = () => {
    return (
        <div className="e-jumpotron">
            <h1 className="e-jumpotron__title">
                {strings.JUMPOTRON_TITLE}
            </h1>
            <p className="e-jumpotron__desc">{strings.JUMPOTRON_DESC}</p>
            {/* social login buttons  */}
            <div className="e-social">
                <div className="e-social__btn d-flex flex-column">
                    <a href="/" className="btn btn-social btn-block"><img alt="google" src={Google}></img> {strings.SIGN_GOOGLE}</a>
                </div>
                <div className="e-social__btn d-flex flex-column">
                    <a href="/" className="btn btn-social btn-block"><img alt="facebook" src={Facebook}></img>{strings.SIGN_FACEBOOK}</a>
                </div>
            </div>
        </div>
    )
}

export default Jumpotron
