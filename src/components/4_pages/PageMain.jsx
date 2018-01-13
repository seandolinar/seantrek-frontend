// import PropTypes from 'prop-types'
import React from 'react'

import TripBox from '../1_molecules/TripBox'
import PhotoGrid from '../1_molecules/PhotoGrid'
import BoxParallax from '../1_molecules/BoxParallax'

import { fetchTripsFeatured, fetchStateCount, fetchPhotoGrid } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import map from '../common/map'

// import { Link, Route, Switch } from 'react-router-dom'

class PageMain extends React.Component {
    constructor (props) {
        super(props)
        this.computeD3Height = this.computeD3Height.bind(this)
    }
    componentWillMount () {
        if (_.isEmpty(this.props.entities.trips_featured)) {
            this.props.fetchTripsFeatured()
        }
        this.props.fetchStateCount()
        this.props.fetchPhotoGrid()
    }
    componentDidMount () {
        const width = this.textInput.offsetWidth
        this.textInput.style.width = Math.min(700, width) + 'px'
        this.textInput.style.height = (Math.min(700, width) / 700 * 500) + 'px'
        this.map = map(this.props.history, {})
    }
    componentDidUpdate () {
        this.map.updateChoropleth(this.props.entities.state_count.data)
    }

    computeD3Height () {
        //const width = this.textInput.offsetWidth //document.getElementById('d3-container').offsetWidth
        // console.log(document.getElementById('d3-container').innerWidth)
        return 700 / 700 * 500
    }

    render () {
        let data = this.props.entities.trips_featured.data
        let listTrips = ''

        if (data) {
            listTrips = data.map((d, i) => {
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
            </div>
            <div className="page-main-map">
                <h2 className="page-main-h2">The States (and Provinces)</h2>
                <div id="d3-container" ref={(input) => { this.textInput = input }}></div>
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
