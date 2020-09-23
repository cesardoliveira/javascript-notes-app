import React, { useState } from 'react';
import { Input, Column, Button } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const [query, setQuery] = useState('');

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            props.searchNotes(query);
        }
    }

    return (
        <Column.Group>
            <Column size={7} offset={1}>
                <Input type="text" name={query} value={query} placeholder="Search note..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </Column>
            <Column mobile={1} size={1}> 
                <Button size="small" onClick={() => {
                    props.fetchNotes()
                    setQuery('')
                }}>
                    <FontAwesomeIcon
                        icon={faTimes} color="grey" className="is-pulled-left"
                    />
                </Button>
            </Column>
            <Column mobile={1} size={1}>
            </Column>
            <Column mobile={1} size={1}>
                <Button size="small" onClick={() => { props.searchNotes(query) }}>
                    <FontAwesomeIcon
                        icon={faSearch} color="grey" className="is-pulled-left"
                    />
                </Button>
            </Column>
        </Column.Group>
    );
}

export default Search;