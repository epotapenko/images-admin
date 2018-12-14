import {SELECT_IMAGE} from '../constants/action-types';

const selectImage = (state = '', action) => {
    switch(action.type) {
        case SELECT_IMAGE:
            return state = action.payload;
        default:
            return state;
    }
}

export default selectImage;