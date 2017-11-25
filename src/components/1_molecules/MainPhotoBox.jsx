import PropTypes from 'prop-types'
import React from 'react'

class MainPhotoBox extends React.Component {
    render () {
        let images = this.props.photos.map((d, i) => <img key={i} src={'//stats.seandolinar.com/photos_seantrek/med_500/' + d.photo_name} />)
        return <div>{images}</div>
    }
}

// TextBoxIntro.PropTypes = {
//     children: PropTypes.string
// }
// TextBoxIntro.defaultProps = {
//     children: '[Enter Text]'
// }

MainPhotoBox.PropTypes = {
    photos: PropTypes.array
}

export default MainPhotoBox
