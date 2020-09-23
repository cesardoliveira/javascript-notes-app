import React, { Fragment } from 'react';
import Header from '../../../components/header/header_home';
import { Column, Section, Title, Container, Card } from 'rbx';
import RegisterForm from '../../../components/auth/register_form';
import logoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';

const RegisterScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={logoImage} alt="logo" />
                                        </Column>
                                    </Column.Group>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Your notes on the cloud
                                                </Title>
                                        </Column>
                                    </Column.Group>
                                    <RegisterForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default RegisterScreen;