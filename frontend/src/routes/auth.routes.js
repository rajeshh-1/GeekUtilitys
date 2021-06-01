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

        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>


    )
}

export default Routes;
