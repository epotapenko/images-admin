import { combineReducers } from 'redux';

import imageTooltip from './imageTooltip';
import imagesList from './list';
import selectImage from './image';
import app from './app';

const rootReducer = combineReducers({
    isAppSave: app,
    list: imagesList,
    tooltip: imageTooltip,
    selectedImageId: selectImage
})

export default rootReducer;