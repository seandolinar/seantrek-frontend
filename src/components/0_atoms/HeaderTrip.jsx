import PropTypes from 'prop-types'
import React from 'react'

class HeaderTrip extends React.Component {
    render () {
        return <div className="header-trip"><h2 className="header-text">{this.props.trip}</h2></div>
    }
}

HeaderTrip.PropTypes = {
    trip: PropTypes.string
}
HeaderTrip.defaultProps = {
    trip: '#SeanTrek'
}

export default HeaderTrip
