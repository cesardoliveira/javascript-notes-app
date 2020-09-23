import React, { Fragment, useEffect, useState } from 'react';
import { Column } from 'rbx';
import { push as Menu } from 'react-burger-menu';
import List from '../notes/list';
import Editor from './editor';
import Search from './search';
import NotesService from '../../services/notes';
import '../../styles/notes.scss';

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

    const fetchNotes = async () => {
        const response = await NotesService.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse());
            setCurrentNote(response.data[0]);
        } else {
            setNotes([]);
        }
    }

    const createNote = async () => {
        await NotesService.create();
        fetchNotes();
    }

    const updateNote = async (oldNote, params) => {
        const response = await NotesService.update(oldNote._id, params);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = response.data;
        setNotes(newNotes);
        setCurrentNote(response.data);
    }

    const searchNotes = async (query) => {
        try {
            const response = await NotesService.search(query);
            setNotes(response.data);
        } catch (error) {
            setNotes([]);
        }
    }

    const deleteNote = async (note) => {
        await NotesService.delete(note._id);
        fetchNotes();
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id === id;
        })
        setCurrentNote(note);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Fragment>
            <Column.Group className="notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <Column.Group>
                        <Column size={10} offset={1}>
                            <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
                        </Column>
                    </Column.Group>
                    <List
                        notes={notes}
                        selectNote={selectNote}
                        createNote={createNote}
                        deleteNote={deleteNote}
                        current_note={current_note}
                    />
                </Menu>
                <Column size={12} className="notes-editor" id="notes-editor">
                    <Editor
                        note={current_note}
                        updateNote={updateNote}
                    />
                </Column>
            </Column.Group>
        </Fragment>
    );
}

export default Notes;