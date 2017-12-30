// import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

import { fetchTripOne } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

import map from '../common/map'

class PageTrip extends React.Component {
    componentWillMount () {
        this.props.fetchTripOne(this.props.match.params.trip_name)
    }

    componentDidMount () {
        //this.map = map(this.props.history, {})
        // console.log(this.props)
        // map()
    }

    componentDidUpdate () {
        if (document.getElementById('d3-container').childElementCount === 0 && this.props.entities.trip_one.data) {
            const newData = {}

            _.first(this.props.entities.trip_one.data).states.map((d, i) => {
                newData[d.abbreviation] = {'fillKey': 'THREE'}
            })

            map(this.props.history, newData)
        }
        // if (document.getElementById('d3-container').childElementCount)
        // map(this.props.history, this.props.entities.state_count.data)
        // this.map.updateChoropleth([{"AL": {"fillKey": "ONE"}}])
    }

    render () {
        let data = _.first(this.props.entities.trip_one.data)

        if (this.props.entities.trip_one.data) {
            let states = data.states.map((d, i) => <Link key={i} to={'/states/' + d.abbreviation}>{d.abbreviation}</Link>)
            let presidents = data.presidents.map((d, i) => <Link key={i} to={'/president/' + d.number}>{d.president_last}</Link>)

            return <div className="page-trip">
                <div>{data.trip_label}</div>
                <div>{data.date_start + ' to ' + data.date_end}</div>
                <div>{states}</div>
                <div>{presidents}</div>
                This is a trip. <a onClick={this.props.history.goBack}>Back</a>. <br/>
                The label is: {this.props.match.params.trip_name}<br/>
                <div id="d3-container"></div>
                {/* The id is: {matchRoute(this.props.match.params.trip_name, this.props.entities.trips.data)} */}
            </div>
        } else {
            return <div id="d3-container"></div>
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
