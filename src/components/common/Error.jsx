import PropTypes from 'prop-types'
import React from 'react'

/**
 * Contrived Error component used *ONLY* for testing purposes
 * (see /test/components/common/test-error.js)
 * @param message
 * @constructor
 */
class Error extends React.Component {
    render () {
        return (
            <span
                id={'foo-id'} // IRL, pass this in via props, or auto-generate
                className="text-error" >
                {this.props.message || 'No detail provided'}
            </span>
        )
    }
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error
