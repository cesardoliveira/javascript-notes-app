import React, { Fragment, useState } from 'react';
import { Input, Column } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

function Search(props) {
    const [query, setQuery] = useState('');

    const HandleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            props.searchNotes(query);
        }
    }

    return (
        <Column.Group>
            <Column size={9} offset={1}>
                <Input type="text" name={query} value={query} placeholder="Search note..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={HandleKeyDown}
                />
            </Column>
            <Column mobile={2} size={1}>
                <a onClick={() => {
                    props.fetchNotes()
                    setQuery('')
                }}>
                    <FontAwesomeIcon
                        icon={faTimes} color="grey" className="is-pulled-left"
                    />
                </a>
            </Column>
            <Column mobile={2} size={1}>
                <a onClick={() => { props.searchNotes(query) }}>
                    <FontAwesomeIcon
                        icon={faSearch} color="grey" className="is-pulled-left"
                    />
                </a>
            </Column>
        </Column.Group>
    );
}

export default Search;