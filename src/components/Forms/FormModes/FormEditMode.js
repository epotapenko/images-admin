import React from 'react';
import Type from 'prop-types';

import FormRowTooltip from '../FormParts/FormRowTooltip';
import FormRowImage from '../FormParts/FormRowImage';
import { Button } from '@material-ui/core';

const FormEditMode = ({
    isImgReady,
    imgId,
    isEditable,
    onSubmitForm,
    onEditImage,
    tooltipProps,
    uploadProps
}) => (
    <form onSubmit={onSubmitForm}>
        <FormRowTooltip isEditable={isEditable} {...tooltipProps}/>
        <FormRowImage isEditable={isEditable} isImgReady={isImgReady} {...uploadProps}/>
        <div className="form-row form-footer">
            {
                isEditable
                ?
                <Button 
                    variant="contained" 
                    color="secondary" 
                    component="button"
                    onClick={() => onEditImage(imgId)}
                >
                    Cancel
                </Button>
                :
                null
            }
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                component="button"
                disabled={!isImgReady ? true : false}
            >
                {!isEditable ? 'Add Image' : 'Update Image'}
            </Button>
        </div>
    </form>
);

FormEditMode.propTypes = {
    isImgReady: Type.bool.isRequired,
    isEditable: Type.bool.isRequired,
    onSubmitForm: Type.func.isRequired,
    tooltipProps: Type.object.isRequired,
    uploadProps: Type.object.isRequired
}

export default FormEditMode;