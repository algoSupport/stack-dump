import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login/Login.jsx';
import Featured from './Featured/Featured.jsx';
import UserProfile from './Featured/User/UserProfile.jsx';
import ErrorLandingPage from './ErrorLandingPage.jsx';
import "../sassStyles/global.scss"

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/featured' component={Featured} />
                <Route path='/users/:userId' component={UserProfile} />
                <Route path='/error' component={ErrorLandingPage} />
            </Switch>
        </Router>
    );
}

export default App;
