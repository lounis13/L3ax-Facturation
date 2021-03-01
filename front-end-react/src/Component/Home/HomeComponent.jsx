import React, {Component} from 'react';

import './HomStyle.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ClientComponent from "../Client/ClientComponent";

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style:'animation cas-1'
        }
    }

    render() {
        console.log(this.props.history)
        return (
            <div>
                <Router>
                    <header>
                        <nav>
                            <div className="link-list">
                                <Link to="/clients">
                                    <button>Clients</button>
                                </Link>

                                <Link to="/articles">
                                    <button>Articles</button>
                                </Link>

                                <Link to="/bons&taxes">
                                    <button>Bons & Taxes</button>
                                </Link>

                                <Link to="/paiements">
                                    <button>Paiements</button>
                                </Link>

                                <Link to="/contrats">
                                    <button>Contrats</button>
                                </Link>

                                <Link to="parametres">
                                    <button>parametres</button>
                                </Link>
                            </div>
                            <div className={this.state.style}/>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/clients" component={ClientComponent}/>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default HomeComponent;