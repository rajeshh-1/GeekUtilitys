import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

import PrivateRoute from "./PrivateRoute"

import Dashboard from "../pages/Dashboard"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"
import UpdateProfile from "../pages/UpdateProfile"

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Favorites from '../pages/Favorites';

import Navbar from '../components/Navbar';

function Routes() {
    return (
        <>
            <Navbar />
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
                <PrivateRoute path="/detail/:content/:id" component={Detail} />
                {/* <PrivateRoute path="/favorites" component={Favorites} /> */}
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
            </Switch>
        </>

    )
}

export default Routes;
