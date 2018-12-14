import React from 'react';
import Type from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import FormRowTooltip from '../FormParts/FormRowTooltip';
import FormRowImage from '../FormParts/FormRowImage';

const FormDefaultMode = ({
    isImgReady,
    isEditable,
    onSubmitForm,
    tooltipProps,
    uploadProps
}) => (
    <Grid container component="form" onSubmit={onSubmitForm} direction="column" justify="center">
        <Grid item xs="6">
            <FormRowTooltip isEditable={isEditable} isImgReady={isImgReady} {...tooltipProps}/>
        </Grid>
        <Grid item xs="6">
            <FormRowImage isEditable={isEditable} isImgReady={isImgReady} {...uploadProps}/>
            <div className="form-row">
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
        </Grid>
    </Grid>
);

FormDefaultMode.propTypes = ({
    isImgReady: Type.bool.isRequired,
    isEditable: Type.bool.isRequired,
    onSubmitForm: Type.func.isRequired,
    tooltipProps: Type.object.isRequired,
    uploadProps: Type.object.isRequired
})

export default FormDefaultMode;