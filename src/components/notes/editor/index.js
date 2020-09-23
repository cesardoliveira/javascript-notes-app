import React, { Fragment, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
    const [currentContent, setCurrentContent] = useState('');
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        setCurrentContent(props.note.body);
    }, [props.note]);

    const updateNote = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        props.updateNote(props.note, { 'title': title, 'body': content });
    }

    const handleChange = (content, delta, source) => {
        clearTimeout(timer);
        if (source === 'user') {
            setCurrentContent(content);
            setTimer(setTimeout(() => updateNote(content), 2000));
        }
    }

    const toolbarOptions = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']
        ]
    }

    return (
        <Fragment>
            <ReactQuill value={currentContent} modules={toolbarOptions} onChange={handleChange} />
        </Fragment>
    );
}

export default Editor;