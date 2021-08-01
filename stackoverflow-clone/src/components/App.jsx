import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login/Login.jsx';
import Featured from './Featured/Featured.jsx';
import UserProfile from './Featured/User/UserProfile.jsx';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/featured' component={Featured} />
                <Route path='/users/:userId' component={UserProfile} />
            </Switch>
        </Router>
    );
}

export default App;
