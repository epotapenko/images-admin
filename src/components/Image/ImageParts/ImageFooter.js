import React from 'react';
import Type from 'prop-types';
import { Grid, Button} from '@material-ui/core';

const ImageFooter = ({
    isEditable,
    imgId,
    onEdit,
    onDelete
}) => (
    <Grid container justify="center" spacing="12" className="app-image-footer">
        <Grid item xs="5">
            <Button 
                variant="contained" 
                color="default"
                onClick={() => onEdit(imgId)}
            >
                {!isEditable ? 'Edit' : 'Undo Edit'}
            </Button>
        </Grid>
        <Grid item xs="5">
            <Button 
                variant="contained" 
                color="default" 
                onClick={() => onDelete(imgId)}
            >
                Delete
            </Button>
        </Grid>
    </Grid>
);

ImageFooter.propTypes = {
    isEditable: Type.bool.isRequired,
    imgId: Type.string.isRequired,
    onEdit: Type.func.isRequired,
    onDelete: Type.func.isRequired
}

export default ImageFooter;