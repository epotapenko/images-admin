import React from 'react';
import Type from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ImageFormContainer from '../../containers/ImageFormContainer';

const ImageCreator = ({title}) => (
    <div className="image-creator">
        <Grid item>
            <Typography variant="h5" align="center">
                {title}
            </Typography>
        </Grid>
        <Grid item>
            <ImageFormContainer />
        </Grid>
    </div>
)

ImageCreator.propTypes = {
    title: Type.string.isRequired,
}

export default ImageCreator;
    
