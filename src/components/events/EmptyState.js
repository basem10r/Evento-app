import React from 'react'
import Empty from '../../assets/images/empty-state.png';
import { strings } from '../../static/Strings';

const EmptyState = () => {
    return (
        <div className="e-empty d-flex flex-column justify-content-center align-items-center">
            <img className="e-empty__image mb-4" alt="Empty state" src={Empty}></img>
            <h3 className="mb-3">{strings.NO_EVENT}</h3>
            <p className="color-text">{strings.NO_EVENT_TEXT}</p>
        </div>
    )
}

export default EmptyState
