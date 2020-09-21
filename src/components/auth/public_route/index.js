import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Redirect to={{ pathname: '/notes' }} /> 
            : <Component {...props} />
    )} />
)

export default PublicRoute;