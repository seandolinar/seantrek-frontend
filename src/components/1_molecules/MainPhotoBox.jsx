import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router'

class MainPhotoBox extends React.Component {
    constructor (props) {
        super(props)

        this.state = { redirect: false, i: 0, invert: false }

        this.handlesBack = this.handlesBack.bind(this)
        this.handlesAdvance = this.handlesAdvance.bind(this)
        this.handlesLoad = this.handlesLoad.bind(this)
        this.handlesImgFilter = this.handlesImgFilter.bind(this)
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handlesImgFilter)
    }

    checkArrayBoundary (i) {
        return Math.min(Math.max(i, 0), this.props.photos.length-1)
    }

    handlesAdvance () {
        this.setState({i: this.checkArrayBoundary(this.state.i + 1)})
    }
    handlesBack () {
        this.setState({i: this.checkArrayBoundary(this.state.i - 1)})
    }
    handlesLoad () {
        this.setState({redirect: true})
    }
    handlesImgFilter () {
        if (!this.state.invert) {
            this.setState({invert: ((window.innerHeight - 500) < (window.pageYOffset || document.documentElement.scrollTop))})
        }
    }

    render () {
        let images = <div className={'photo-box-img photo-box-blank'}></div>

        if (this.props.photos.length > 0) {
          
            images = this.props.photos.slice(0, 1).map((d, i) => <img
                className={'photo-box-img'}
                src={'//stats.seandolinar.com/photos_seantrek/web_1000/' + d.photo_name }
                srcSet={'//stats.seandolinar.com/photos_seantrek/web_1000/' + d.photo_name + ' 500w, ' + '//stats.seandolinar.com/photos_seantrek/web_1000/' + d.photo_name + ' 1000w'}
                key={i}
            ></img>)
        }

        if (this.state.redirect) {
            return <Redirect to={'/photos/' + photoId} push={true} />
        }

        return images
    }
}

MainPhotoBox.PropTypes = {
    photos: PropTypes.array
}

export default MainPhotoBox
