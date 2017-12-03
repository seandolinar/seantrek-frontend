import PropTypes from 'prop-types'
import React from 'react'

import HeaderTrip from '../0_atoms/HeaderTrip'
import MainPhotoBox from './MainPhotoBox'

class TripBox extends React.Component {
    render () {
        let data = this.props.data

        return <li className="trip-box">
            <HeaderTrip trip={data.trip_label} />
            <div className="trip-box-content">
                <MainPhotoBox photos={data.photos} />
                <div className="main-trip-desc">{data.trip_desc}</div>
            </div>
        </li>
    }
}

TripBox.PropTypes = {
    photos: PropTypes.array
}

export default TripBox
