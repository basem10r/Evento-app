import background from '../../assets/images/event.jpg'
import { Avatar } from '@material-ui/core';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { strings, eventDetails, formats } from '../../static/Strings';
import EventsDataService from '../../services/events.service';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import * as moment from 'moment';

const EventDetails = ({ onAdd }) => {
    const [event, setEvent] = useState({ attenders: [] });
    let eventId = useLocation().pathname.split('/').pop();
    // oninit
    useEffect(() => {
        getEvent(eventId);
    }, []);
    // get event 
    const getEvent = (id) => {
        EventsDataService.getCurrent(id).then((e) => {
            const eventFormat = e.data();
            eventFormat.types = eventFormat.types.join(',');
            eventFormat.id = e.id;
            setEvent(eventFormat);
        });
    }
    // add attenders 
    const addAttender = (e) => {
        e.preventDefault();
        onAdd(event);
        getEvent(eventId);
    }
    return (
        <>
            <Link to="/events" className="color-text d-flex align-items-center"><FaAngleLeft></FaAngleLeft>{strings.BACK}</Link>
            <div className="e-event e-event--details mt-4">
                <div className="e-event__image">
                    <div className="e-attend d-flex align-items-center">
                        <span className="e-attend__text">{eventDetails.WANT_TO_ATTEND}</span>
                        <button onClick={addAttender} className="btn btn-primary">RSVP</button>
                    </div>
                    <img alt='event' src={background}></img>
                </div>
                <div className="e-event__block">
                    <h3 className="e-event__title">{event.title}</h3>
                    <p className="e-event__desc">
                        {event.desc}
                    </p>
                    <div className="e-properties row d-flex mt-4">
                        <div className="col-6 e-properties__element ">
                            <p className="e-properties__title">{eventDetails.EVENT_TYPE}</p>
                            <span>{event.types}</span>
                        </div>
                        <div className="col-6 e-properties__element ">
                            <p className="e-properties__title">{eventDetails.ADDMISSION_COST}</p>
                            <span>{event.cost}</span>
                        </div>
                        <div className="col-12 e-properties__element">
                            <p className="e-properties__title">{eventDetails.LOCATION}</p>
                            <span>{event.location}</span>
                        </div>
                        <div className="col-6 e-properties__element">
                            <p className="e-properties__title">{eventDetails.DATE}</p>
                            <span>{event.date}</span>
                        </div>
                        <div className="col-6 e-properties__element">
                            <p className="e-properties__title">{eventDetails.TIME}</p>
                            <span>{event.time}</span>
                        </div>
                        {
                            event.attenders.length > 0 && <div className="col-12 e-properties__element">
                                <p className="e-properties__title">{eventDetails.ATTENDING_MEMBER}</p>
                                <div className="e-attenders d-flex align-items-center">
                                    {
                                        event.attenders.slice(0, 5).map((user, index) => (
                                            (
                                                user.image ?
                                                    <Avatar src={user.image}></Avatar> :
                                                    <Avatar>{user.name}</Avatar>
                                            )
                                        ))
                                    }
                                    {
                                        event.attenders > 5 && <span className="ml-3">+{event.attenders.length - 5}</span>
                                    }

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default EventDetails
