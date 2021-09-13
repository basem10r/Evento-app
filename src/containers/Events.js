import React, { useState, useEffect, useContext } from 'react'
import SideMenu from '../components/SideMenu';
import Header from '../components/shared/Header';
import List from '../components/events/List';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddForm from '../components/events/AddForm';
import { strings, toaster, formats } from '../static/Strings';
import firebase from '../utilities/firebase';
import * as moment from 'moment';
import EventDetails from '../components/events/EventDetails';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import EventsDataService from '../services/events.service';
import { toast, ToastContainer } from 'react-toastify';

const Events = ({ logOut }) => {
    const [isList, setIsList] = useState(false);
    const [events, setEvents] = useState([]);
    const [redirect, setredirect] = useState(null);
    const user = useContext(UserContext);
    useEffect(() => {
        getEvents();
        if (Object.keys(user).length === 0) {
            setredirect('/login');
        }
    }, [])
    if (redirect) {
        return <Redirect to={redirect} />
    }
    // get events 
    const getEvents = () => {
        EventsDataService.getAll().then((q) => {
            const items = [];
            q.docs.map(doc => items.push({ ...doc.data(), id: doc.id }));
            setEvents(items);
        })
    }
    // add event 
    const addEvent = (e) => {
        debugger;
        e.date = moment(e.date.toDate()).format(formats.DATE);
        e.time = moment(e.time.toDate()).format(formats.TIME);
        const date = e.date.split(' ');
        e.childDate = `${date[1]} ${date[0]}`;
        EventsDataService.create(e)
            .then(function (docRef) {
                setEvents([...events, e]);
                getEvents();
                toast.success('Event added successfully');
            })
            .catch(function (error) {
                toast.success('Adding event failed');
            });

    }
    // check user exist 
    const userExist = (event) => {
        return event.attenders.some(u => u.id === user.id);
    }
    // book event
    const addEventAttenders = (event) => {
        debugger;
        if (!userExist(event)) {
            if (event.id) {
                const userObj = user;
                EventsDataService.update(event.id, {
                    attenders: firebase.firestore.FieldValue.arrayUnion(userObj)
                }).then(() => {
                    setEvents([...events, event.attenders.shift(user)])
                    getEvents();
                    toast.success(toaster.BOOK_SUCCESS)
                }).catch((e) => {
                    toast.error(toaster.BOOK_FAILED)
                })
            }
        } else {
            toast.warning('you are already attending this event');
        }
    }
    // get single event 

    return (
        <Router>
            <div className="e-container">
                <SideMenu />
                <Switch>
                    <Route
                        exact
                        path="/events"
                        render={() => {
                            return (
                                <div className="e-container__child mx-auto px-4">
                                    <Header listLength={events.length} title={strings.EVENTS} onAdd={setIsList(true)} isList={isList} />
                                    <List events={events} />
                                </div>
                            )
                        }}
                    />
                    <Route

                        path="/events/add-event"
                        render={() => {
                            return (
                                <div className="e-container__child e-container__child--small mx-auto px-4">
                                    <Header title={strings.ADD_EVENT} />
                                    <AddForm onAdd={addEvent} />
                                </div>
                            )
                        }} />
                    <Route
                        path="/events/:id"
                        render={(props) => {
                            return (
                                <div className="e-container__child e-container__child--small mx-auto px-4">
                                    <EventDetails {...props} onAdd={addEventAttenders} />
                                </div>
                            )
                        }} />
                </Switch>

            </div>
            <ToastContainer
                position="bottom-right"
                hideProgressBar={true}
                autoClose={2000}
                newestOnTop={true}
                closeOnClick={false}
                draggable={false}
                rtl={false}
                icon={false}
            />
        </Router>
    )
}

export default Events
