import {SET_TOOLTIP_TITLE, SET_TOOLTIP_POSITION} from '../constants/action-types';

const initialState = {
    title: '',
    position: 'top'
};

const imageTooltip = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOOLTIP_TITLE:  
            return {...state, title: action.payload};
        case SET_TOOLTIP_POSITION:
            return {...state, position: action.payload};
        default:
            return state;
    }
}

export default imageTooltip;