import React from 'react';
import { Message } from 'rbx';

const Notification = (props) => {
    return (
        <Message size="small" color={props.color}>
            <Message.Body>
                {props.message}
            </Message.Body>
        </Message>
    );
}

export default Notification;