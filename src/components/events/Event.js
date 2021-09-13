import React from 'react';
import { strings } from '../../static/Strings';
import { Link } from 'react-router-dom';
const Event = ({ event }) => {
    return (
        <div className="e-event e-event--card">
            <div className="e-event__image" >
                <div className="e-event__date">
                    <p className="e-event__month">
                        {event.childDate}
                    </p>
                </div>
                <img alt={event.title} src={event.imageUrl}></img>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <div className="e-event__block">
                    <h3 className="e-event__title">{event.title}</h3>
                    <p className="e-event__desc"><span className="truncate-lines">{event.desc}</span></p>

                </div>
                <div className="d-flex justify-content-between align-items-center e-event__button mt-3 ">
                    <Link to={`events/${event.id}`} className="btn btn-primary h-36">{strings.SEE_MORE}</Link>
                </div>
            </div>

        </div>
    )
}

export default Event
