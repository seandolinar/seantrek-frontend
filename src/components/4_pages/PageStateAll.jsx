// import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom'

import { fetchPhotoGrid, fetchStateCount } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

import map from '../common/map'

class PageStateAll extends React.Component {
    componentWillMount () {
        this.props.fetchStateCount()
        this.props.fetchPhotoGrid()
    }

    componentDidMount () {
        this.map = map(this.props.history, {})
    }
    componentDidUpdate () {
        if (document.getElementById('d3-container').childElementCount === 0) {
            // map(this.props.history, this.props.entities.state_count.data)
        }
        // if (document.getElementById('d3-container').childElementCount)
        // map(this.props.history, this.props.entities.state_count.data)
        this.map.updateChoropleth(this.props.entities.state_count.data)
    }
    render () {
        return <div>
            <h1></h1>
            <div id="d3-container"></div>
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
