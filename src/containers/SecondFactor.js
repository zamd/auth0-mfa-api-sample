import SecondFactorAuthenticator from '../components/SecondFactorAuthenticator';
import SecondFactorEnroller from '../components/SecondFactorEnroller';

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

class SecondFactor extends Component {
    render() {
        const {enrolled} = this.props;
        return(
            <div>
                {enrolled ? <SecondFactorAuthenticator {...this.props}/> : <SecondFactorEnroller/>}
            </div>
        )
    }
}

SecondFactor.propTypes = propTypes

SecondFactor.defaultProps = defaultProps

const mapStateToProps = state => {
    const { enrolled, type } = state.secondFactor;
    return { enrolled, type }
}


export default connect(mapStateToProps, null)(SecondFactor)
