import React from 'react';
import Type from 'prop-types';

const Tooltip = ({
    children,
    position = 'top'
}) => (
    <div className={`tooltip ${position}`}>
        {children ? children : 'Tooltip'}
    </div>
);

Tooltip.propTypes = {
    children: Type.node,
    position: Type.string
}

export default Tooltip;