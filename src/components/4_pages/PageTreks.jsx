// import PropTypes from 'prop-types'
import React from 'react'

import TripBox from '../1_molecules/TripBox'

import { fetchTrips } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

class PageTreks extends React.Component {
    componentWillMount () {
        // if (_.isEmpty(this.props.entities.trips)) {
        //     this.props.fetchTrips()
        // }
        this.props.fetchTrips()
    }

    componentDidUpdate () {
        let data = this.props.entities.trips.data

        if (data) {
            // build(data)
        }
    }

    render () {
        let data = this.props.entities.trips.data
        let listTrips = ''

        if (data) {
            let dateTripYearControl = ''
            listTrips = data.reverse().map((d, i) => {
                const dateTrip = new Date(Date.parse(d.date_start))
                const dateTripYear = dateTrip.getFullYear()

                if (dateTripYear === dateTripYearControl) {
                    return (
                        <TripBox key={i} data={d} />
                    )
                } else {
                    dateTripYearControl = dateTripYear
                    return (
                        <React.Fragment>
                            <li className="trek-header-year">{dateTripYear}</li>
                            <TripBox key={i} data={d} />
                        </React.Fragment>
                    )
                }
            })
        }

        return <div className="page-treks">
            <h2 className="page-h2">The Treks</h2>
            <ul className="page-main-treks">{listTrips}</ul>
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
