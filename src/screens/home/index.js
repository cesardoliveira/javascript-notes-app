import React, { Fragment } from 'react';
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header/header_home';
import { Column, Section, Title, Container } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import '../../styles/home.scss';

const HomeScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Create notes easily and access when you wants on the cloud
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>
                            JavaScript Notes is a responsive web application to creating notes using Customizable Rich-Text Editor and you can access your notes from anywhere.
                            <br /> <br />
                            This application was built in two parts, frontend using React and Bulma (CSS Framework) and backend using Node.js and MongoDB.
                        </Title>
                        <Link to='register' className="button is-outlined is-white is-large">
                            <strong>Register for free Now</strong>
                        </Link>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={presentationImage} alt="presentation" />
                    </Column>
                </Column.Group>
                <Column.Group>
                    <Column size={5}>
                        <Title size={4} spaced className="has-text-white">
                            Code available on GitHub:
                        </Title>
                        <a href='https://github.com/cesardoliveira/javascript-notes-app'>
                            <Title size={6} spaced className="has-text-light" subtitle>
                                <FontAwesomeIcon icon={faCode} /> JavaScript Notes Client (Frontend)
                            </Title>
                        </a>
                        <a href='https://github.com/cesardoliveira/javascript-notes-api'>
                            <Title size={6} spaced className="has-text-light" subtitle>
                                <FontAwesomeIcon icon={faCode} /> JavaScript Notes API (Backend)
                            </Title>
                        </a>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default HomeScreen;