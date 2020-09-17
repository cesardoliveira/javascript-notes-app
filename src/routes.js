import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import UsersScreen from './screens/users/edit';
import NotesScreen from './screens/notes/index';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/users/edit" component={UsersScreen} />
            <Route exact path="/notes" component={NotesScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;