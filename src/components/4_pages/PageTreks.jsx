// import PropTypes from 'prop-types'
import React from 'react'

import TripBox from '../1_molecules/TripBox'

import { fetchTrips } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

// import { Link, Route, Switch } from 'react-router-dom'

class PageTreks extends React.Component {
    componentWillMount () {
        if (_.isEmpty(this.props.entities.trips)) {
            this.props.fetchTrips()
        }
    }
    render () {
        let data = this.props.entities.trips.data
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
            <div id="d3-trek-timeline"></div>
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
        fetchTrips
    }
)(PageTreks)
