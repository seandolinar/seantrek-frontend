// import PropTypes from 'prop-types'
import React from 'react'
import TextBoxIntro from '../0_atoms/TextBoxIntro'
// import HeaderTrip from '../0_atoms/HeaderTrip'
// import MainPhotoBox from '../1_molecules/MainPhotoBox'

import TripBox from '../1_molecules/TripBox'

import { fetchTrips } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

// import { Link, Route, Switch } from 'react-router-dom'

class PageMain extends React.Component {
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
            <TextBoxIntro>
                    I have traveled all around the US and a few places in Canada. 
                    It's always interesting to find stuff in your own country that's different from what you are use to.
            </TextBoxIntro>
            <ul>{listTrips}</ul>
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
)(PageMain)

// export
