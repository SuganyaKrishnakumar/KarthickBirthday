import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Birthday from "./Components/BirthdayScreen";
import HappyBirthday from "./Components/HappyWishes"
import MemorableMoments from "./Components/MemorableMoments";
//import Contact from "./Contact/Contact";
//import Products from "./Product/Products";
import welcome from "./Components/Welcome";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={welcome} />
                    <Route path="/HappyBirthday" component={HappyBirthday}/>
                    <Route path="/Memorable" component={MemorableMoments}/>
                    <Route path="/Birthday" component={Birthday} />                    
                    {/* <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}