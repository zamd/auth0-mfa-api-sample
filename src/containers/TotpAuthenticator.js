import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {totpActions} from '../actions';

const propTypes = {}

const defaultProps = {}

class TotpAuthenticator extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const {authenticate} = this.props;
        return (
            <div>
                <h1>TOTP</h1>
                <input type="button" value="enroll" onClick={()=>authenticate()}/>
            </div>
        )
    }
}

TotpAuthenticator.propTypes = propTypes

TotpAuthenticator.defaultProps = defaultProps

const mapStateToProps = state => {
    const { key } = state
    return { key }
}


export default connect(mapStateToProps, totpActions)(TotpAuthenticator)
