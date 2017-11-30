import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

class HeaderTrip extends React.Component {

    render () {
        const linkAddress = '/trip/' + this.props.trip.toLowerCase().replace(/ /g, '-')
        
        return <div className="header-trip"><Link to={linkAddress}><h2 className="header-text">{this.props.trip}</h2></Link></div>
    }
}

HeaderTrip.PropTypes = {
    trip: PropTypes.string
}
HeaderTrip.defaultProps = {
    trip: '#SeanTrek'
}

export default HeaderTrip
