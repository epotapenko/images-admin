import React from 'react';
import Type from 'prop-types';

import { TextField, Radio, FormLabel, FormControlLabel} from '@material-ui/core';

const positions = ['top', 'right', 'bottom', 'left'];

const FormRowTooltip = ({
    value,
    isEditable,
    tooltipPosition,
    onGetTitle,
    onGetPosition
}) => {
    const inputLabelText = !isEditable ? "Enter an image tooltip" : "Enter the new tooltip";
    const inputRadioColor = !isEditable ? "primary" : "secondary";

    return (
        <>
            <div className="form-row">
                <TextField
                    label={inputLabelText}
                    value={value ? value : ''}
                    onChange={onGetTitle}
                    margin="normal"
                />
            </div>
            <div className="form-row">
                <FormLabel component="div">Choose a tooltip position</FormLabel>
                {
                    positions.map((position) => (
                        <FormControlLabel key={position} control={
                            <Radio
                                checked={tooltipPosition === position}
                                onChange={onGetPosition}
                                value={position}
                                name={position}
                                aria-label={position}
                                color={inputRadioColor}
                            />} 
                        label={position}/>
                    ))
                }
            </div>
        </>
    )
};

FormRowTooltip.propTypes = {
    value: Type.string,
    isEditable: Type.bool.isRequired,
    tooltipPosition: Type.string.isRequired,
    onGetTitle: Type.func.isRequired,
    onGetPosition: Type.func.isRequired
}

export default FormRowTooltip;