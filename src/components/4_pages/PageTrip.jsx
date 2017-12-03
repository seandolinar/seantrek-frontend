// import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

import { fetchTripOne } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

const matchRoute = (route, tripArray) => {
    return tripArray.find((d, i) => d.trip_label.toLowerCase().replace(/ /g, '-') === route).trip_id
}

class PageTrip extends React.Component {
    componentWillMount () {
        this.props.fetchTripOne(this.props.match.params.trip_name)
    }
    render () {
        let data = _.first(this.props.entities.trip_one.data)

        if (this.props.entities.trip_one.data) {
            let states = data.states.map((d, i) => <Link key={i} to={'/state/' + d.abbreviation}>{d.abbreviation}</Link>)
            let presidents = data.presidents.map((d, i) => <Link key={i} to={'/president/' + d.number}>{d.president_last}</Link>)

            return <div className="page-trip">
                <div>{data.trip_label}</div>
                <div>{data.date_start + ' to ' + data.date_end}</div>
                <div>{states}</div>
                <div>{presidents}</div>
                This is a trip. <Link to="/">Back</Link>. <br/>
                The label is: {this.props.match.params.trip_name}<br/>
                {/* The id is: {matchRoute(this.props.match.params.trip_name, this.props.entities.trips.data)} */}
            </div>
        } else {
            return 'trade'
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
    { fetchTripOne }
)(PageTrip)
