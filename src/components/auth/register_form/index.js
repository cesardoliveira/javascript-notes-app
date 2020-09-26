import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Label, Input, Column } from 'rbx';
import { Redirect } from 'react-router-dom';
import UsersService from '../../../services/users';
import Notification from '../../notification';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await UsersService.register({ name: name, email: email, password: password });
            setRedirectToLogin(true);
        } catch (error) {
            (error.response) ? setErrorMsg(error.response.data['error']) : setErrorMsg('Connection to endpoint API failed.');
            setError(true);
        }
    }

    const handleKeyDown = async (evt) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            try {
                if (email === "") {
                    (error.response) ? setErrorMsg(error.response.data['error']) : setErrorMsg('Email is required.');
                    setError(true);
                } else if (password === "") {
                    (error.response) ? setErrorMsg(error.response.data['error']) : setErrorMsg('Password is required.');
                    setError(true);
                } else {
                    await UsersService.register({ name: name, email: email, password: password });
                    setRedirectToLogin(true);
                }
            } catch (error) {
                (error.response) ? setErrorMsg(error.response.data['error']) : setErrorMsg('Connection to endpoint API failed.');
                setError(true);
            }
        }
    }

    if (redirectToLogin) {
        return <Redirect to={{ pathname: "/login" }} />
    }

    return (
        <Fragment>
            <Column.Group>
                <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name: </Label>
                            <Control>
                                <Input type="name" required name="name" value={name} onChange={e => setName(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email: </Label>
                            <Control>
                                <Input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password: </Label>
                            <Control>
                                <Input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <Button
                                            className="button is white has-text-custom-purple"
                                            onClick={e => setRedirectToLogin(true)}>Login or
                                        </Button>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Notification color="danger" message={errorMsg} />}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    );
}

export default RegisterForm;