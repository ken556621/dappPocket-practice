import React from 'react';
import { Switch, Route } from "react-router-dom";

import LoginContainer from "./Login/LoginContainer";
import Verify from "./Login/Verify";
import Welcome from "./Login/Welcome";
import Home from "./Home/Home";
import Auth from "./shared/Auth";

export default (
    <Switch>
        <Route path="/login" component={ LoginContainer } />
        <Route path="/verify" component={ Verify } />
        <Route path="/welcome" component={ Welcome } />
        <Route exact path="/" component={ Auth(Home) } />
    </Switch>
)