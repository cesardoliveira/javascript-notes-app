import React, { Fragment, useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Label } from 'rbx';
import UserService from '../../../services/users';
import Notification from '../../notification';

const UserEditForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [notificationMsg, setNotificationMsg] = useState('');

    const initializerUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
    }

    useEffect(() => {
        initializerUser();
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await UserService.update({ email: email, name: name })
            setStatus('success');
            setNotificationMsg('User updated with sucess.');
        } catch (error) {
            setStatus('error');
            (error.response) ? setNotificationMsg(error.response.data['error']) : setNotificationMsg('Connection to endpoint API failed.');
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-grey-text">Name</Label>
                        <Input type="name" value={name || ""} name="name" required
                            onChange={e => setName(e.target.value)}
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-grey-text">E-mail</Label>
                        <Input type="email" value={email || ""} name="email" required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="custom-purple" outlined>
                                    Update
                                </Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status === 'error' &&
                    <Notification color="danger" message={notificationMsg} />}
                {status === 'success' &&
                    <Notification color="success" message={notificationMsg} />}
            </form>
        </Fragment>
    );
}

export default UserEditForm;