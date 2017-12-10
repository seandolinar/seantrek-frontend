// import PropTypes from 'prop-types'
import React from 'react'

import TripBox from '../1_molecules/TripBox'
import PhotoGrid from '../1_molecules/PhotoGrid'

import { fetchTripsFeatured, fetchStateCount, fetchPhotoGrid } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import map from '../common/map'

// import { Link, Route, Switch } from 'react-router-dom'

class PageMain extends React.Component {
    componentWillMount () {
        if (_.isEmpty(this.props.entities.trips_featured)) {
            this.props.fetchTripsFeatured()
        }
        this.props.fetchStateCount()
        this.props.fetchPhotoGrid()
    }
    componentDidMount () {
        this.map = map(this.props.history, {})      
    }
    componentDidUpdate () {
        if (document.getElementById('d3-container').childElementCount == 0) {
            // map(this.props.history, this.props.entities.state_count.data)
        }
        // if (document.getElementById('d3-container').childElementCount)
        // map(this.props.history, this.props.entities.state_count.data)
        this.map.updateChoropleth(this.props.entities.state_count.data)
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
        let photoData = this.props.entities.photo_grid.data
        let photoBox = ''

        if (photoData) {
            photoBox = <PhotoGrid data={photoData}/ >
        }


        return <div className="page-main">
            <h2 className="page-main-h2">The Treks</h2>
            <ul className="page-main-trips">{listTrips}</ul>
            <h2 className="page-main-h2">The States (and Provinces)</h2>
            <div id="d3-container"></div>
            <h2 className="page-main-h2">The Sites</h2>
            <ul className="page-main-photo-box">{photoBox}</ul>
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
        fetchTripsFeatured,
        fetchStateCount,
        fetchPhotoGrid
    }
)(PageMain)
