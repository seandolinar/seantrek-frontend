// import PropTypes from 'prop-types'
import React from 'react'
import TextBoxIntro from '../0_atoms/TextBoxIntro'
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
