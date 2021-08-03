import { createStore } from 'redux';

const initialState = {
    counter: {
        value: 5,
        step: 4,
    }
};

const reducer = (state = initialState, action) => {

    console.log(action);
    switch (action.type)
    {
        case 'counter/increment':
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + state.counter.step
                }
            }
        case 'counter/decrement':
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value - action.payload
                }
            }
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
// console.log(store.getState())