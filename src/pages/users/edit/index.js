import React, { Fragment } from 'react';
import { Section, Column, Title, Container, Card } from 'rbx';
import UserEditForm from '../../../components/users/user_edit_form';
import UserEditPasswordForm from '../../../components/users/user_edit_password_form';
import UserDelete from '../../../components/users/user_delete';
import HeaderUserEdit from '../../../components/header/header_user_edit';
import '../../../styles/users.scss';

const UsersEditScreen = () => {
    return (
        <Fragment>
            <HeaderUserEdit/>
            <Section size="medium" className="users">
                <Container>
                    <Column.Group centered className="users-edit">
                        <Column size={4}>
                            <Title size={5} className="has-text-grey has-text-left">
                                Profile
                        </Title>
                            <Card>
                                <Card.Content>
                                    <UserEditForm />
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    <Column.Group centered className="users-edit">
                        <Column size={4}>
                            <Title size={5} className="has-text-grey has-text-left">
                                Password
                        </Title>
                            <Card>
                                <Card.Content>
                                    <UserEditPasswordForm />
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    <Column.Group centered>
                        <Column size={4} className="has-text-right">
                            <UserDelete />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    );
}

export default UsersEditScreen;