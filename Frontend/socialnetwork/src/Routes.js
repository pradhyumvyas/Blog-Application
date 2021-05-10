import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './Components/Home'
import CreatePost from './Components/PostData/CreatePost';
import Dashboard from './Components/PostData/Dashboard';
import Profile from './Components/users/Profile';
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
            <Route path="/createpost" exact component={CreatePost} ></Route>
            <Route path="/profile" exact component={Profile} ></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes