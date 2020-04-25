import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="counter">
            <div id="counter">{counter}</div>
            <button onClick={inc} id="inc">+</button>
            <button onClick={dec} id="dec">-</button>
            <button onClick={rnd} id="rnd">rnd</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

    return {
        inc,
        dec,
        rnd
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
