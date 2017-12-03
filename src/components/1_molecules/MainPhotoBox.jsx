import PropTypes from 'prop-types'
import React from 'react'

class MainPhotoBox extends React.Component {
    constructor (props) {
        super(props)

        this.state = { xTrans: 0 }

        this.handlesBack = this.handlesBack.bind(this)
        this.handlesAdvance = this.handlesAdvance.bind(this)
    }

    handlesAdvance () {
        let newX = this.state.xTrans - 300
        this.setState({ xTrans: newX })
    }
    handlesBack () {
        let newX = this.state.xTrans + 300
        this.setState({ xTrans: newX })
    }

    render () {
        let images = this.props.photos.map((d, i) => <div className="photo-box-img" key={i}><img src={'//stats.seandolinar.com/photos_seantrek/med_500/' + d.photo_name} /></div>)
        let photoWidth = 300
        let wideWidth = images.length * photoWidth

        return (
            <div className="main-photo-box-window" style={{'width': photoWidth}}>
                <div className="main-photo-box-wide" style={{'width': wideWidth, 'transform': 'translate(' + this.state.xTrans + 'px,0)'}}>
                    {images}
                </div>
                <div className="main-photo-box-control b" onClick={this.handlesBack}>B</div>
                <div className="main-photo-box-control f" onClick={this.handlesAdvance}>F</div>
            </div>
        )
    }
}

MainPhotoBox.PropTypes = {
    photos: PropTypes.array
}

export default MainPhotoBox
