import React, { useState } from 'react';
import { Navbar, Column, Dropdown, Button } from 'rbx';
import UsersService from '../../../services/users';
import { Redirect, Link } from "react-router-dom";
import logoImage from '../../../assets/images/logo-white.png';
import '../../../styles/header.scss';

const HeaderUserEdit = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const logOut = async () => {
        await UsersService.logout();
        setRedirectToHome(true);
    }

    if (redirectToHome === true)
        return <Redirect to={{ pathname: "/" }} />

    return (
        <Navbar color="custom-purple" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <Link to="/notes">
                            <img src={logoImage} alt="logo" />
                        </Link>
                    </Column>
                </Column.Group>
                <Navbar.Burger
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Navbar.Burger>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                    <Navbar.Item as="div">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button className="button" color="white" outlined>
                                    <span>{JSON.parse(localStorage.getItem('user'))['name']}</span>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="div">
                                        <Button onClick={e => logOut()}>
                                            LogOut
                                        </Button>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    );

}

export default HeaderUserEdit;