import PropTypes from 'prop-types'
import React from 'react'
// import {Link} from 'react-router-dom'
// import {pageNameToRoute} from '../common/util'

class HeaderTrip extends React.Component {
    render () {
        // const linkAddress = '/treks/' + pageNameToRoute(this.props.trip)
        
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
