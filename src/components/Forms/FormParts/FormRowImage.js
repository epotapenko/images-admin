import React from 'react';
import Type from 'prop-types';

const style = {
    display: 'none'
}

const imagePreviewContainerStyle = {
    borderRadius: '5px',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '300px',
    margin: '0 auto'
}

const imagePreviewStyle = {
    borderRadius: '5px',
    display: 'block',
    maxWidth: '100%'
}

const FormRowImage = ({
    isEditable,
    isImgReady,
    imgSrc,
    onUploadImg
}) => {
    let formId = !isEditable ? 'add_image' : 'update_image';
    let isImageReadyAddForm = isImgReady && formId === 'add_image';
    
    return (
        <div className="form-row">
            <input
                accept="image/*"
                id={formId}
                type="file"
                onChange={onUploadImg}
                style={style}/>
            <label 
                style={imagePreviewContainerStyle}
                htmlFor={formId}>
                {
                    isImageReadyAddForm 
                    ?
                    <img style={imagePreviewStyle} src={imgSrc} alt="previewImage"/>
                    :
                    <h4>Click here to upload an image</h4>
                }
            </label>
        </div>
    )
};

FormRowImage.propTypes = {
    isEditable: Type.bool.isRequired,
    isImgReady: Type.bool.isRequired,
    imgSrc: Type.string.isRequired,
    onUploadImg: Type.func.isRequired
}

export default FormRowImage;