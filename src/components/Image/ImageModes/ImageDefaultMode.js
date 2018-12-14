import React from 'react';
import Type from 'prop-types';
import Tooltip from '../../Tooltip/Tooltip';

const ImageDefaultMode = ({
    title,
    imgSrc,
    tooltipPosition
}) => (
    <>
        <Tooltip position={tooltipPosition}>
            {title}
        </Tooltip>
        <div className="app-image-img">
            <img src={imgSrc} alt={title} style={{maxWidth: '100%'}}/>
        </div>
    </>
);

ImageDefaultMode.propTypes = {
    title: Type.string,
    imgSrc: Type.string.isRequired,
    tooltipPosition: Type.string.isRequired
}

export default ImageDefaultMode;