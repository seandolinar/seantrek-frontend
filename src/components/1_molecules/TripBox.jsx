import PropTypes from 'prop-types'
import React from 'react'

import HeaderTrip from '../0_atoms/HeaderTrip'
import MainPhotoBox from './MainPhotoBox'
import {Link} from 'react-router-dom'

import {pageNameToRoute} from '../common/util'


class TripBox extends React.Component {
    render () {
        let data = this.props.data
        console.log(data)
        const linkAddress = '/treks/' + pageNameToRoute(this.props.data.trip_label)

        return <li className="trip-box">
            <Link to={linkAddress}>
                <div className="trip-box-card">
                    <div className="trip-box-content">
                        {/* <div className="main-trip-desc">{data.trip_desc}</div> */}
                        <MainPhotoBox photos={data.photos} />
                    </div>
                    <HeaderTrip trip={data.trip_label} />
                </div>
            </Link>
        </li>
    }
}

TripBox.PropTypes = {
    photos: PropTypes.array
}

export default TripBox
