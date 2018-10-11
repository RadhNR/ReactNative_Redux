import * as ActionTypes from './action-types';

// action creators - helper method, 
// create and return action object
//es5
// return action object with type and payload
// these are pure functions
// ES5 way of writting function
export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            value
        }
    }
}

//ES6 way of writiing function
export const decrement = (value) => ({
    type: ActionTypes.DECREMENT,
    payload: { value }
});

export const reset = () => ({
    type: ActionTypes.RESET
});


//cart feature
// cart/state/actions.js

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item
    }
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id, qty
    }
});


export const empty = () => ({
    type: ActionTypes.EMPTY_CART
});