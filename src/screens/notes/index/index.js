import React, { Fragment, useState } from 'react';
import '../../../styles/notes.scss'
import HeaderLogged from '../../../components/header_logged';
import Notes from '../../../components/notes';

const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen} />
            <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
        Notes Screen
        </Fragment>
    );
}

export default NotesScreen;