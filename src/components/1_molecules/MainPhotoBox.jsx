import PropTypes from 'prop-types'
import React from 'react'

class MainPhotoBox extends React.Component {
    render () {
        let images = this.props.photos.map((d, i) => <img key={i} src={'//stats.seandolinar.com/photos_seantrek/med_500/' + d.photo_name} />)
        return <div className="main-photo-box">{images}</div>
    }
}

MainPhotoBox.PropTypes = {
    photos: PropTypes.array
}

export default MainPhotoBox
