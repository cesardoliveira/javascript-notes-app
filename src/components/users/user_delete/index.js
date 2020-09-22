import React, { useState } from 'react';
import { Button } from 'rbx';
import UsersService from '../../../services/users';
import { Redirect } from 'react-router-dom';

const UserDelete = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if(window.confirm('Are you sure you wish to delete this account?')) {
            await UsersService.delete();
            setRedirectToHome(true);
        }
    }

    if (redirectToHome) {
        return <Redirect to={{ pathname: "/" }} />
    }

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Delete Profile
        </Button>
    );
}

export default UserDelete;