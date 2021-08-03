import { createStore } from 'redux';

const initialState = {
    counter: {
        value: 10,
        step: 3,
    } 
};

const reducer = (state = initialState, action) => {
    

    switch (action.type) {
        case 'counter/increment':
            return {
                ...state, 
                counter: {
                    ...state.counter,
                    value: state.counter.value + action.payload
                }
            }
        case 'counter/decrement':
            return {
                 ...state, 
                counter: {
                    ...state.counter,
                    value: state.counter.value - action.payload
                } }
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
// console.log(store.getState())