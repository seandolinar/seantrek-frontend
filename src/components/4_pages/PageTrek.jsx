// import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

import { fetchTripOne } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import PhotoGrid from '../1_molecules/PhotoGrid'

import map from '../common/map'

class PageTrek extends React.Component {
    componentWillMount () {
        this.props.fetchTripOne(this.props.match.params.trip_name)
    }

    componentDidMount () {
    }

    componentDidUpdate () {
        if (document.getElementById('d3-container').childElementCount === 0 && this.props.entities.trip_one.data) {
            const newData = {}

            _.first(this.props.entities.trip_one.data).states.map((d, i) => {
                newData[d.abbreviation] = {'fillKey': 'THREE'}
            })

            map(this.props.history, newData)
        }
    }

    render () {
        const data = _.first(this.props.entities.trip_one.data)

        // const photoData = data.photos
        let photoBox
        console.log(data)
        if (data && data.photos) {
            console.log(data.photos)
            // I don't have photos in this API (yet)
            photoBox = <PhotoGrid data={data.photos} />
        }

        if (this.props.entities.trip_one.data) {
            // let states = data.states.map((d, i) => <Link key={i} to={'/states/' + d.abbreviation}>{d.abbreviation}</Link>)
            let presidents = data.presidents.map((d, i) => <div key={i}><Link to={'/president/' + d.number}>{d.president_last}</Link></div>)

            return <div className="page-trek">
                <h2 className="trek-label page-h2">
                    {data.trip_label}
                </h2>        
                <div className="trek-date">{data.date_start_display + ' to ' + data.date_end_display}</div>
                <div>{data.trip_desc}</div>
                {/* <div className="trek-states">{states}</div> */}
                {/* This is a trip. <a onClick={this.props.history.goBack}>Back</a>. <br/> */}
                {/* The label is: {this.props.match.params.trip_name}<br/> */}
                <div id="d3-container"></div>
                <h3></h3>
                {/* <PhotoGrid /> */}
                <div className="trek-presidents">{presidents}</div>
                {photoBox}
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
)(PageTrek)
