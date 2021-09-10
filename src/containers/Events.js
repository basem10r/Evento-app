import React, { useState } from 'react'
import SideMenu from '../components/SideMenu';
import Header from '../components/shared/Header';
import List from '../components/events/List';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddForm from '../components/events/AddForm';
import { strings } from '../static/Strings';

const Events = () => {
    const [isForm, setISForm] = useState(false);
    return (
        <Router>
            <div className="e-container">
                <SideMenu />
                <Route
                    exact
                    path="/events"
                    render={() => {
                        return (
                            <div className="e-container__child mx-auto px-4">
                                <Header title={strings.EVENTS} onAdd={setISForm(true)} isForm={isForm} />
                                <List />
                            </div>
                        )
                    }}
                />
                <Route
                    exact
                    path="/events/add-event"
                    render={() => {
                        return (
                            <div className="e-container__child mx-auto px-4">
                                <Header title={strings.ADD_EVENT} />
                                <AddForm />
                            </div>
                        )
                    }} />
            </div>
        </Router>

    )
}

export default Events
