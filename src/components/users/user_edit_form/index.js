import React, { Fragment, useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Title, Help, Label } from 'rbx';
import UserService from '../../../services/users';

const UserEditForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const initializerUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
    }

    useEffect(() => {
        initializerUser();
    }, []);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await UserService.update({ email: email, name: name })
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <Fragment>
            <form onSubmit={HandleSubmit}>
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
                {status == 'error' &&
                    <Help color="danger"> Failed to update user</Help>}
                {status == 'success' &&
                    <Help color="success"> User updated with sucess</Help>}
            </form>
        </Fragment>
    );
}

export default UserEditForm;