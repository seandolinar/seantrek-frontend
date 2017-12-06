// import PropTypes from 'prop-types'
import React from 'react'

import TripBox from '../1_molecules/TripBox'

import { fetchTripsFeatured } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import map from '../common/map'

// import { Link, Route, Switch } from 'react-router-dom'

class PageMain extends React.Component {
    componentWillMount () {
        if (_.isEmpty(this.props.entities.trips_featured)) {
            this.props.fetchTripsFeatured()
        }
    }
    componentDidMount () {
        map(this.props.history)
    }
    render () {
        let data = this.props.entities.trips_featured.data
        let listTrips = ''

        if (data) {
            listTrips = data.map((d, i) => {
                return (
                    <TripBox key={i} data={d} />
                )
            })
        }

        return <div className="page-main">
            <h2 className="page-main-h2">The Treks</h2>
            <ul className="page-main-trips">{listTrips}</ul>
            <h2 className="page-main-h2">The States (and Provinces)</h2>
            <div id="d3-container"></div>
            <h2 className="page-main-h2">The Sites</h2>
            <ul className="page-main-trips">{listTrips}</ul>
        </div>
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

export default connect(
    (state) => ({
        entities: state.entities
    }),
    {
        fetchTripsFeatured
    }
)(PageMain)
