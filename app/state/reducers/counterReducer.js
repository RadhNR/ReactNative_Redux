// state/reducer/conterReducer.js

import * as ActionTypes from '../action-types';

const INITIAL_STATE = 0;
// one reducer per file, default export
// pure function
export default function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value;
        case ActionTypes.DECREMENT:
            return state - action.payload.value;
        case ActionTypes.RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
}