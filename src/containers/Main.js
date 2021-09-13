import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import "react-toastify/dist/ReactToastify.css";
import '../App.scss';
import Events from './Events';
import UserProvider from "../providers/UserProvider";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";


const Main = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsUserAuthenticated(true)
        } else {
            setIsUserAuthenticated(false)
        }
    }, [])
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <UserProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => (
                            isUserAuthenticated ? <Redirect to="/events" /> :
                                <Redirect to="/login" />
                        )} />

                        <Route path="/events" component={() => <Events />} />
                        <Route path="/login" component={Login} />
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
                    </Switch>
                </Router>
            </UserProvider>
        </MuiPickersUtilsProvider>
    )
}

export default Main
