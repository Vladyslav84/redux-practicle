
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// import store from '../../redux/store';

function Counter({ step, bb, onIncrement, onDecrement }) {

    console.log(onDecrement);
    return (
        <>
            <button type='button' onClick={() => onIncrement(step)}>+</button>
            <span>{bb}</span>
            <button type='button' onClick={() => onDecrement(step)}>-</button>
        </>
    )

}

const mapStateToProps = state => {
    console.log(state);

    return {

        bb: state.counter.value,
        step: state.counter.step,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (value) => dispatch(actions.increment(value)),
        onDecrement: (value) => dispatch(actions.decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
