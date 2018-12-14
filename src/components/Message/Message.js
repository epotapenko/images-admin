import React from 'react';
import Type from 'prop-types';

const Message = ({
    children
}) => (
    <div>{children}</div>
);

Message.propTypes = {
    children: Type.node
}

export default Message;