import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Label, Input, Column, Help } from 'rbx';
import { Redirect } from 'react-router-dom';
import UsersService from '../../../services/users';
import Notification from '../../notification';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await UsersService.login({ email: email, password: password });
            setRedirectToNotes(true);
        } catch (error) {
            (error.response) ? setErrorMsg(error.response.data['error']) : setErrorMsg('Connection to endpoint API failed');
            setError(true);
        }
    }

    if (redirectToRegister) {
        return <Redirect to={{ pathname: "/register" }} />
    } else if (redirectToNotes) {
        return <Redirect to={{ pathname: "/notes" }} />
    }

    return (
        <Fragment>
            <Column.Group>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
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
                                        <a className="button is white has-text-custom-purple"
                                            onClick={e => setRedirectToRegister(true)}>Register or</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Notification color="danger" message={errorMsg}/>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    );
}

export default LoginForm;