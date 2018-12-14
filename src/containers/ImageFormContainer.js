import React, { Component } from 'react';
import Type from 'prop-types';
import { connect } from 'react-redux';

import { 
    setTooltipTitle, 
    setTooltipPosition, 
    addImageToList, 
    updateImage, 
    editImage
} from '../actions';

import uniqid from 'uniqid';
import {Grid} from '@material-ui/core';
import Form from '../components/Forms/Form';


class ImageFormContainer extends Component {

    state = {
        img: '',
        isImgReady: false,
        tooltip: '',
        tooltipPosition: 'top'
    }

    onGetTitleHandler = (event) => {
        this.setState({
            tooltip: event.target.value
        })
    }

    onGetPositionHandler = (event) => {
        this.setState({
            tooltipPosition: event.target.value
        })
    }

    onUploadImageHandler = (event) => {
        const files = event.target.files;
        const reader = new FileReader();
    
        reader.onload = e => {
            if(e.target.readyState === 2) {
                this.setState({
                    img: e.target.result,
                    isImgReady: true
                })
            } else {
                this.setState({
                    isImgReady: false
                })
            }
        }
        
        reader.readAsDataURL(files[0]);
    }

    handleSubmitImageUpdates = (event) => {
        event.preventDefault();

        const { isEditable, imgId } = this.props;

        const {
            tooltip,
            img,
            tooltipPosition,
        } = this.state;

        const imageUpdates = {
            title: tooltip,
            src: img,
            position: tooltipPosition
        }

        if( isEditable ) {
            this.props.onEditImage(imgId);
        }

        this.props.onUpdateImage(imgId, imageUpdates)
    }

    handleSubmitImage = (event) => {
        event.preventDefault();
        const {
            tooltip,
            img,
            tooltipPosition,
        } = this.state;
        
        const image = {
            title: tooltip,
            src: img,
            position: tooltipPosition,
            edit: false,
            id: uniqid()
        }

        this.props.onAddNewImage(image)
    }
    
    render() {
        const { img, isImgReady, tooltip, tooltipPosition } = this.state;
        const { isEditable = false, title, imgId} = this.props;

        return (
            <Grid container justify="center">
                <Form 
                    value={tooltip ? tooltip : title}
                    isImgReady={isImgReady}
                    isEditable={isEditable}
                    imgSrc={!isEditable ? img : img}
                    imgId={imgId}
                    tooltipPosition={tooltipPosition}
                    onGetTitle={this.onGetTitleHandler}
                    onGetPosition={this.onGetPositionHandler}
                    onUploadImg={this.onUploadImageHandler}
                    onEditImage={this.props.onEditImage}
                    onSubmitForm={!isEditable ? this.handleSubmitImage :  this.handleSubmitImageUpdates}
                />
            </Grid>
        )
    }
}

ImageFormContainer.propTypes = {
    isEditable: Type.bool
}

const mapStateToProps = state => {
    return {
        tooltip: state.tooltip,
        list: state.list,
        selectedImageId: state.selectedImageId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setTitleHandler: title => {
            dispatch(setTooltipTitle(title))
        },
        setPositionHandler: position => {
            dispatch(setTooltipPosition(position))
        },
        onAddNewImage: image => {
            dispatch(addImageToList(image))
        },
        onEditImage: id => {
            dispatch(editImage(id))
        },
        onUpdateImage: (id, updates) => {
            dispatch(updateImage(id, updates))
        }
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(ImageFormContainer);