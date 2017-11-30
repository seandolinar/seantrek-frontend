// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import TripBox from '../1_molecules/TripBox'

import { fetchState } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

class PageState extends React.Component {
    componentWillMount () {
        this.props.fetchState(this.props.match.params.state_name)
    }
    render () {
        let data = this.props.entities.trips.data
        console.log(this.props)
        if (data) {
            let listTrip = data.map((d, i) => <TripBox key={i} data={d}/>)
            return <ul>{listTrip}</ul>
        } else {
            return <div>No trips!</div>
        }
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

export default connect(
    (state) => ({
        entities: state.entities
    }),
    { fetchState }
)(PageState)
