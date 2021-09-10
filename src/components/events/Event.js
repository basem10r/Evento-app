import React from 'react';
import { strings } from '../../static/Strings';
const Event = ({ event }) => {
    const date = event.dateFrom.split(' ');
    return (
        <div className="e-event e-event--card">
            <div className="e-event__image">
                <div className="e-event__date">
                    <p className="e-event__month">
                        {date[0]}
                    </p>
                    <p className="e-event__month">
                        {date[1]}
                    </p>
                </div>
                <img alt={event.title} src={event.image}></img>
            </div>
            <div className="e-event__block">
                <h3 className="e-event__title">{event.title}</h3>
                <p className="e-event__desc"><span className="truncate-lines">{event.desc}</span><a href="/" className="color-primary">{strings.SEE_MORE}</a></p>
                <div className="e-event__button mt-3 ">
                    <button className="btn btn-primary h-36">{strings.RSPV}</button>
                </div>
            </div>
        </div>
    )
}

export default Event
