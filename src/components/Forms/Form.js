import React from 'react';
import Type from 'prop-types';

import FormDefaultMode from './FormModes/FormDefaultMode';
import FormEditMode from './FormModes/FormEditMode';

const Form = ({
    value,
    isImgReady,
    isEditable,
    imgSrc,
    imgId,
    tooltipPosition,
    onGetTitle,
    onGetPosition,
    onUploadImg,
    onEditImage,
    onSubmitForm
}) => {

    const tooltipProps = {
        value,
        tooltipPosition,
        onGetTitle,
        onGetPosition
    }
        
    const uploadImageProps = {
        isImgReady,
        imgSrc,
        onUploadImg
    }

    const formDefaultMode = <FormDefaultMode isEditable={isEditable} isImgReady={isImgReady} onSubmitForm={onSubmitForm} tooltipProps={tooltipProps} uploadProps={uploadImageProps}/>;
    const formEditMode = <FormEditMode isEditable={isEditable} isImgReady={isImgReady} imgId={imgId} onEditImage={onEditImage} onSubmitForm={onSubmitForm} tooltipProps={tooltipProps} uploadProps={uploadImageProps}/>;
    
    const formToggleMode = !isEditable ? formDefaultMode : formEditMode;


    return formToggleMode;

};


Form.propTypes = {
    value: Type.string,
    isImgReady: Type.bool.isRequired,
    isEditable: Type.bool.isRequired,
    imgSrc: Type.string.isRequired,
    tooltipPosition: Type.string.isRequired,
    onGetTitle: Type.func.isRequired,
    onGetPosition: Type.func.isRequired,
    onUploadImg: Type.func.isRequired,
    onSubmitForm: Type.func.isRequired
}

export default Form;