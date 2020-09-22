import React, { Fragment } from 'react';
import { Column, Scetion, Title, Container, Card, Button, Section } from 'rbx';
import '../../../styles/users.scss';
import HeaderLogged from '../../../components/header_logged';

const UsersEditScreen = () => (
    <Fragment>
        <HeaderLogged />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Profile
                        </Title>
                        <Card>
                            <Card.Content>
                                Users Edit form...
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
                                Users Edit Password form...
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={4} className="has-text-right">
                        Users Delete Button
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default UsersEditScreen;