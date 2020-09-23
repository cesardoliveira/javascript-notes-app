import React, { Fragment, useState } from 'react';
import HeaderLogged from '../../../components/header/header_logged';
import Notes from '../../../components/notes';

const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <HeaderLogged isOpen={isOpen} setIsOpen={setIsOpen} />
            <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    );
}
export default NotesScreen;