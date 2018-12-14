import { 
    ADD_IMAGE, 
    SELECT_IMAGE, 
    DELETE_IMAGE, 
    EDIT_IMAGE, 
    UPDATE_IMAGE, 
    SET_TOOLTIP_TITLE, 
    SET_TOOLTIP_POSITION,
    SAVE_APP
} from '../constants/action-types';


export const setTooltipTitle = title => ({
    type: SET_TOOLTIP_TITLE,
    payload: title
})

export const setTooltipPosition = position => ({
    type: SET_TOOLTIP_POSITION,
    payload: position
})

export const addImageToList = image => ({
    type: ADD_IMAGE,
    payload: image
})

export const selectImage = id => ({
    type: SELECT_IMAGE,
    payload: id
})

export const editImage = id => ({
    type: EDIT_IMAGE,
    payload: id
})

export const updateImage = (id, updates) => ({
    type: UPDATE_IMAGE,
    payload: {
        id,
        updates
    }
})

export const deleteImage = id => ({
    type: DELETE_IMAGE,
    payload: id
})

export const saveApp = state => ({
    type: SAVE_APP,
    payload: state
})