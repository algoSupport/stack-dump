import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login/Login.jsx';
import Featured from './Featured/Featured.jsx';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/featured' component={Featured} />
            </Switch>
        </Router>
    );
}

export default App;
