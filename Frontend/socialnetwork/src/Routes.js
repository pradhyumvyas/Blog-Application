import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './Components/Home'
import Dashboard from './Components/PostData/Dashboard';
import Signin from './Components/users/Signin'
import Signup from './Components/users/Signup'



function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/signin" exact component={Signin} ></Route>
            <Route path="/signup" exact component={Signup} ></Route>
            <Route path="/dashboard" exact component={Dashboard} ></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes