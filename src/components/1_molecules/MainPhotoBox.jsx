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

    // moveSlide (i) {
    //     this.setState({ xTra i })
    // }

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
        // const width = 250

        let images = <div className={'photo-box-img photo-box-blank'}></div>

        if (this.props.photos.length > 0) {
            images = this.props.photos.slice(0, 1).map((d, i) => <div
                className={'photo-box-img' + (this.state.invert ? ' developed' : '')}
                key={i}
                style={
                    {
                        'backgroundImage': 'url(\'' + '//stats.seandolinar.com/photos_seantrek/med_500/' + d.photo_name + '\')' // ,
                        // 'width': width,
                        // 'height': width, // 400/300 * width,
                        // 'WebkitFilter': 'invert(' + this.state.invert + ')',
                        // 'filter': 'invert(' + this.state.invert + ')'
                    }
                }
                ref={(img) => { this.img = img }}
            ></div>)
        }

        // let photoWidth = width
        // let wideWidth = images.length * photoWidth

        // let posX = this.state.i * -width
        // let photoId;

        // if (this.props.photos[this.state.i]) {
        //     photoId = this.props.photos[this.state.i].photo_id 
        // }

        if (this.state.redirect) {
            return <Redirect to={'/photos/' + photoId} push={true} />
        }

        // return (
        //     <div className="main-photo-box-window" style={{'width': photoWidth, 'flexBasis': width}}>
        //         <div className="main-photo-box-wide" style={{'width': wideWidth, 'transform': 'translate(' + posX + 'px,0)'}}>
        //             {images}
        //         </div>
        //     </div>
        // )

        return (
            <div className="main-photo-box-window">
                <div className="main-photo-box-wide">
                    {images}
                </div>
            </div>
        )
    }
}

MainPhotoBox.PropTypes = {
    photos: PropTypes.array
}

export default MainPhotoBox
