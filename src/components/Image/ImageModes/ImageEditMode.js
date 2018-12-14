import React from 'react';
import Type from 'prop-types';
import Tooltip from '../../Tooltip/Tooltip';

const ImageEditMode = ({
    title,
    imgSrc,
    tooltipPosition,
    children
}) => (
    <> 
        <div className="app-image-form">
            {children}
        </div>
        <Tooltip position={tooltipPosition}>
            {title}
        </Tooltip>
        <div className="app-image-img">
            <img src={imgSrc} alt={title} style={{maxWidth: '100%'}}/>
        </div>
    </>
);

ImageEditMode.propTypes = {
    children: Type.node,
    title: Type.string,
    imgSrc: Type.string.isRequired,
    tooltipPosition: Type.string.isRequired
}

export default ImageEditMode;