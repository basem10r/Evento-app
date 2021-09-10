import React from 'react';
import { strings } from '../../static/Strings';

const Jumpotron = () => {
    return (
        <div className="e-jumpotron">
            <h1 className="e-jumpotron__title">
                {strings.JUMPOTRON_TITLE}
            </h1>
            <p className="e-jumpotron__desc">{strings.JUMPOTRON_DESC}</p>
            {/* social login buttons  */}
        </div>
    )
}

export default Jumpotron
