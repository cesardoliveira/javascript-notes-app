import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import UserService from '../../../services/users';
import Notification from '../../notification';

const UserEditPasswordForm = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [status, setStatus] = useState(null);
    const [notificationMsg, setNotificationMsg] = useState('');

    const HandleSubmit = async (evt) => {
        evt.preventDefault();

        if (password == passwordConfirmation) {
            try {
                await UserService.updatePassword({ password: password });
                setStatus("success");
                setNotificationMsg('Password updated with success. ');
            } catch (error) {
                setStatus("error_update");
                (error.response) ? setNotificationMsg(error.response.data['error']) : setNotificationMsg('Connection to endpoint API failed');
            }
        } else {
            setStatus("error_confirmation_password");
            setNotificationMsg('Passwords does not match. ');
        }
    }

    return (
        <Fragment>
            <form onSubmit={HandleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Password</Label>
                        <Input
                            type="password" value={password} required name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Password Confirmation</Label>
                        <Input
                            type="password" value={passwordConfirmation} required name="passwordConfirmation"
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="custom-purple" outlined>Update Password</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status == "error_update" &&
                    <Notification color="danger" message={notificationMsg}/>
                }
                {status == "error_confirmation_password" &&
                    <Notification color="danger" message={notificationMsg}/>
                }
                {status == "success" &&
                    <Notification color="success" message={notificationMsg}/>
                }
            </form>
        </Fragment>
    );
}

export default UserEditPasswordForm;