import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './pages/home';
import RegisterScreen from './pages/auth/register';
import LoginScreen from './pages/auth/login';
import UsersScreen from './pages/users/edit';
import NotesScreen from './pages/notes/index';
import PrivateRoute from './components/auth/private_route';
import PublicRoute from './components/auth/public_route';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <PublicRoute exact path="/register" component={RegisterScreen} />
            <PublicRoute exact path="/login" component={LoginScreen} />
            <PrivateRoute exact path="/users/edit" component={UsersScreen} />
            <PrivateRoute exact path="/notes" component={NotesScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;