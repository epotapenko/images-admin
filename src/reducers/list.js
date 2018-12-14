import { 
    ADD_IMAGE, 
    EDIT_IMAGE, 
    UPDATE_IMAGE, 
    DELETE_IMAGE, 
    UPDATE_LIST_FROM_LSTORAGE } from '../constants/action-types';

const imagesList = (state = [], action) => {
    switch (action.type) {
        case ADD_IMAGE: 
            return [...state, action.payload];

        case EDIT_IMAGE: 
            const list = [...state];
            list.map(item => item.id === action.payload ? item.edit = !item.edit : 'test')
            return list;

        case UPDATE_IMAGE:
            return [...state].map(image => image.id === action.payload.id ? {...image, ...action.payload.updates} : image)

        case DELETE_IMAGE:
            return state.filter(item => item.id !== action.payload);

        case UPDATE_LIST_FROM_LSTORAGE:
            return [...state, action.payload];

        default:
            return state;
    }
}

export default imagesList;