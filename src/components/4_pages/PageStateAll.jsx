// import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom'

import { fetchPhotoGrid, fetchStateCount } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

import map from '../common/map'
import MapBox from '../1_molecules/MapBox'

class PageStateAll extends React.Component {
    componentWillMount () {
        this.props.fetchStateCount()
        this.props.fetchPhotoGrid()
    }

    componentDidMount () {
        // this.map = map(this.props.history, {})
    }
    componentDidUpdate () {
        if (document.getElementById('d3-container').childElementCount === 0) {
            // map(this.props.history, this.props.entities.state_count.data)
        }
        // if (document.getElementById('d3-container').childElementCount)
        // map(this.props.history, this.props.entities.state_count.data)
        // this.map.updateChoropleth(this.props.entities.state_count.data)
    }
    render () {
        return <div className="page-states">
            <div className="page-states-body-map">
                <h1></h1>
                <MapBox data={this.props.entities.state_count.data} showKey={true}/>
            </div>
        </div>
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

export default connect(
    (state) => ({
        entities: state.entities
    }), {
        fetchPhotoGrid,
        fetchStateCount
    }
)(PageStateAll)
