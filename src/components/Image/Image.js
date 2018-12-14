import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import { Paper, Grid} from '@material-ui/core';
import ImageFormContainer from '../../containers/ImageFormContainer';
import ImageDefaultMode from './ImageModes/ImageDefaultMode';
import ImageEditMode from './ImageModes/ImageEditMode';
import ImageFooter from './ImageParts/ImageFooter'

const Image = ({
    image,
    selectedImageId,
    onEdit,
    onSelect,
    onDelete
}) => {
    const isImageSelected = selectedImageId === image.id;
    const isImageEditable = image.edit;
    const imageClass = classNames('app-image', {selected: isImageSelected, editable: isImageEditable})

    return (
        <Grid item xs="3">   
            <Paper className={imageClass} onClick={() => onSelect(image.id)}>
                {
                    isImageSelected && isImageEditable
                    ?
                    <ImageEditMode 
                        title={image.title}
                        imgSrc={image.src}
                        tooltipPosition={image.position}>
                        
                        <ImageFormContainer 
                            isEditable={isImageEditable} 
                            imgSrc={image.src}
                            imgId={image.id}
                            title={image.title}/>

                    </ImageEditMode>
                    :
                    <ImageDefaultMode 
                        title={image.title}
                        imgSrc={image.src}
                        tooltipPosition={image.position}
                    />
                }
                {
                    isImageSelected && !isImageEditable
                    ?
                    <ImageFooter 
                        isEditable={isImageEditable}
                        imgId={image.id}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                    :
                    null
                }
                
            </Paper>
            
        </Grid>
    )
    
};

Image.propTypes = {
    image: Type.object.isRequired,
    selectedImageId: Type.string,
    onEdit: Type.func.isRequired,
    onSelect: Type.func.isRequired,
    onDelete: Type.func.isRequired
}

export default Image;