
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css'

import LoginComponent from "./Component/Login/LoginComponent";
import HomeComponent from "./Component/Home/HomeComponent";
import React from "react";

/**
 * Appliacation
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    return (

        <div className="App">
            <Router>
                <Switch>
                    <Route path="/"      exact component={LoginComponent}/>
                    <Route path="/login"       component={LoginComponent}/>
                    <Route path="/home"        component={HomeComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
