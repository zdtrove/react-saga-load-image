import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { bindActionCreators } from 'redux'

const Counter = ({ actionsProp, value, counter }) => {
    const { increment, decrement, incrementAsync } = actionsProp
    return (
        <div>
            <button onClick={() => increment(value)}>
                Increment
            </button>
            {' '}
            <button onClick={() => incrementAsync(value)}>
                Increment Async
            </button>
            {' '}
            <button onClick={() => decrement(value)}>
                Decrement
            </button>
            <hr />
            <div>
                Clicked: {counter} times
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actionsProp: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
