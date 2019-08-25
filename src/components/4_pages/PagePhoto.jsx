// import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

import { fetchPhoto } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import {pageNameToRoute} from '../common/util'


class PagePhoto extends React.Component {
    componentWillMount () {
        this.props.entities.photo.data = []
        this.props.fetchPhoto(this.props.match.params.photo_id)
    }
    render () {
        let data = _.first(this.props.entities.photo.data)
        console.log(data)
        if (data) {
            return <div className="page-photo">
                <div className="photo-title">{data.title}</div>
                <div className="photo-label"><Link to={'/treks/' + pageNameToRoute(data.trip_label)}>{data.trip_label}</Link></div>
                <img src={'//analytics.seandolinar.com/photos_seantrek/web_1000/' + data.photo_name}/>
                <div className="photo-caption">{data.caption}</div>
            </div>
        } else {
            return null
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
    { fetchPhoto }
)(PagePhoto)
