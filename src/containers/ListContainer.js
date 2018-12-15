import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    selectImage, 
    deleteImage, 
    editImage
} from '../actions';
import List from '../components/List/List';
import Message from '../components/Message/Message';

class ListContainer extends Component {

    render() {
        const { list, selectedImageId, isAppSave  } = this.props;
        const listLength = Object.keys(list).length;

        return (
            <>
            {
                listLength > 0
                ?
                <List 
                    list={list}
                    selectedImageId={selectedImageId}
                    isAppSave={isAppSave}
                    onEdit={this.props.onEdit}
                    onDelete={this.props.onDelete} 
                    onSelect={this.props.onSelect}
                />
                :
                <Message>The images will appear here</Message>
            }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAppSave: state.isAppSave,
        list: state.list,
        selectedImageId: state.selectedImageId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelect: id => dispatch(selectImage(id)),
        onDelete: id => dispatch(deleteImage(id)),
        onEdit: id => dispatch(editImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);