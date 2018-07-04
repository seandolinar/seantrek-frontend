// import PropTypes from 'prop-types'
import React from 'react'

import TripBox from '../1_molecules/TripBox'
import PhotoGrid from '../1_molecules/PhotoGrid'
import BoxParallax from '../1_molecules/BoxParallax'
import MapBox from '../1_molecules/MapBox'
import Button from '../0_atoms/Button'

import { fetchTripsFeatured, fetchStateCount, fetchPhotoGrid } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { shuffle } from 'lodash'


class PageMain extends React.Component {
    // constructor (props) {
    //     super(props)
    // }

    componentWillMount () {
        if (_.isEmpty(this.props.entities.trips_featured)) {
            this.props.fetchTripsFeatured()
        }
        this.props.fetchStateCount()
        this.props.fetchPhotoGrid()
    }

    render () {
        let data = this.props.entities.trips_featured.data
        let listTrips = ''

        if (data) {
            listTrips = _.shuffle(data).slice(0, 6).map((d, i) => {
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
            <div className="page-main-trips">
                <h2 className="page-main-h2">The Treks</h2>
                <ul>
                    {listTrips}
                </ul>
                <Button to="/treks">MORE</Button>
            </div>
            <div className="page-main-sub">
                <h2 className="page-main-h2">The States (and Provinces)</h2>
                <MapBox data={this.props.entities.state_count.data} showKey={true}/>
            </div>
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
