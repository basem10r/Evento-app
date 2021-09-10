import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './Login';
import Events from './Events';

const Main = (isUserAuthenticated) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            isUserAuthenticated ? <Redirect to="/events" /> : <Redirect to="/login" />
                        )
                    }}
                />
                <Route path="/events" component={Events} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>

    )
}

export default Main
