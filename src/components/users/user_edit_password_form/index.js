import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import UserService from '../../../services/users';

const UserEditPasswordForm = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [status, setStatus] = useState(null);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();

        if (password == passwordConfirmation) {
            try {
                await UserService.updatePassword({ password: password });
                setStatus("success");
            } catch (err) {
                setStatus("error");
            }
        } else {
            setStatus("error_confirmation_password");
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
                    <Help color="danger">Failed to update password</Help>
                }
                {status == "error_confirmation_password" &&
                    <Help color="danger">Passwords does not match</Help>
                }
                {status == "success" &&
                    <Help color="success">Password updated with success</Help>
                }
            </form>
        </Fragment>
    );
}

export default UserEditPasswordForm;