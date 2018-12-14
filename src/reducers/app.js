import { SAVE_APP } from '../constants/action-types';

const app = (state = false, action) => {
    switch(action.type) {
        case SAVE_APP:
            return state = action.payload;

        default:
            return state;
    }
}

export default app;