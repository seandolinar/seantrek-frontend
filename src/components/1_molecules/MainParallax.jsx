import PropTypes from 'prop-types'
import React from 'react'
import TextBoxIntro from '../0_atoms/TextBoxIntro'

class MainPhotoBox extends React.Component {
    constructor (props) {
        super(props)

        // const windowWidth = 2000 // window.innerWidth
        const windowLeftAdjust = -Math.max((2000 - window.innerWidth) / 2, 0)
        const fadeLimit = window.innerWidth < 900 ? 200 : 400

        const coverPhoto = ['seantrek_cover.jpg', 'seantrek_cover_02.jpg'][Math.floor(Math.random() * 2)]

        this.state = {bottom: 500, transformValue: 0, windowLeftAdjust, fade: 1, fadeLimit, coverPhoto}

        // this.handleScroll = this.handleScroll.bind(this)
        this.handleResize = this.handleResize.bind(this)
    }

    componentWillMount () {
        // possible jittery safari solution...will need to test this, because it might not be doing anything
        // using debounce stuff from https://stackoverflow.com/questions/25335829/parallax-scrolling-jumpy-in-safari-ios
        let requesting = false

        let killRequesting = _.debounce(function () {
            requesting = false
        }, 100)

        let onScroll = () => {
            if (!requesting) {
                requesting = true
                requestAnimationFrame(parallax)
            }
            killRequesting()
        }

        let parallax = () => {
            const scrollNew = window.scrollY / 1.1
            const transform = 'translate3d(0,' + scrollNew + 'px,0)'
            let fade = 1

            if (window.scrollY > 100) {
                fade = Math.max((this.state.fadeLimit - window.scrollY), 0) / 200
            }

            this.setState({ transform, fade, transformValue: window.scrollY })
            if (requesting) {
                requestAnimationFrame(parallax)
            }
        }

        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', onScroll, false)
    }

    handleResize () {
        // const windowWidth = 2000 // window.innerWidth
        const windowLeftAdjust = -Math.max((2000 - window.innerWidth) / 2, 0)
        this.setState({windowLeftAdjust})
    }

    handleScroll2 () {
        window.requestAnimationFrame(() => {
            const scrollNew = window.scrollY / 1
            const transform = 'translate3d(0,' + scrollNew + 'px,0)'
            let fade = 1

            if (window.scrollY > 100) {
                fade = Math.max((300 - window.scrollY), 0) / 200
            }

            this.setState({ transform, fade, transformValue: window.scrollY })
        })
    }

    render () {
        return (
            <div className="cover-container">
                <div className="cover-fixed-div" style={{'top': -this.state.transformValue}}>
                    <img
                        src={'//stats.seandolinar.com/photos_seantrek/cover/' + this.state.coverPhoto}
                        className="cover-img"
                        style={{'bottom': 500, 'transform': this.state.transform, 'width': 2000, 'left': this.state.windowLeftAdjust} }/>
                </div>
                <div className="cover-text-box-intro" style={{'top': 300}}>

                </div>
                <div id="cover-div-spacer" className="cover-div-spacer" style={{'height': 700, 'opacity': this.state.fade}}>
                    <div className="cover-div-spacer-title">#SeanTrek</div>
                    <TextBoxIntro>
                        I have traveled all around the US and a few places in Canada. 
                        It's always interesting to find stuff in your own country that's different from what you are use to.
                    </TextBoxIntro>
                </div>
            </div>
        )
    }
}

MainPhotoBox.PropTypes = {
    photos: PropTypes.array
}

export default MainPhotoBox
