import PropTypes from 'prop-types'
import React from 'react'
// import TextBoxIntro from '../0_atoms/TextBoxIntro'

class BoxParallax extends React.Component {
    constructor (props) {
        super(props)

        // const windowWidth = 2000 // window.innerWidth
        const windowLeftAdjust = -Math.max((1000 - window.innerWidth) / 2, 0)
        const fadeLimit = window.innerWidth < 900 ? 200 : 400

        this.state = {bottom: 500, initialY: 0, transformValue: 0, windowLeftAdjust, imgHeight: 0, fade: 1, fadeLimit, height: 300}

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
            const scrollNew = window.scrollY / 2 // set this for the relative scroll speed
            const transform = 'translate3d(0,' + scrollNew + 'px,0)'
            let fade = 1

            if (window.scrollY > 100) {
                fade = Math.max((this.state.fadeLimit - window.scrollY), 0) / 200
            }

            this.setState({ transform, fade, transformValue: window.scrollY }) // , transformValue: window.scrollY
            if (requesting) {
                requestAnimationFrame(parallax)
            }
        }

        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', onScroll, false)
    }

    componentDidMount () {
        this.setState({initialY: this.parallaxContainer.offsetTop, imgHeight: this.parallaxImg.offsetHeight})
    }

    handleResize () {
        // const windowWidth = 2000 // window.innerWidth
        const windowLeftAdjust = -Math.max((1000 - window.innerWidth) / 2, 0)
        this.setState({windowLeftAdjust})
    }

    render () {
        return (
            <div className="parallax-container" ref={(div) => { this.parallaxContainer = div }} style={{height: this.state.height}}>
                <div className="parallax-fixed-div" style={{'top': this.state.initialY - this.state.transformValue, height: this.state.height}} >
                    <img
                        src={ this.props.img }
                        className="parallax-img"
                        style={ 
                            {
                                'transform': this.state.transform,
                                // 'left': this.state.windowLeftAdjust, 
                                'backgroundImage': 'url(' + this.props.img + ')'
                                // 'bottom': this.state.height / 3
                                // 'height': this.state.height
                            }
                        }
                        ref={(img) => { this.parallaxImg = img }} />
                    {/* </div> */}
                </div>
                {/* <div className="cover-text-box-intro" style={{'top': 300}}></div> */}
                {/* <div id="cover-div-spacer" className="cover-div-spacer" style={{'height': 700, 'opacity': this.state.fade}}>
                    <div className="cover-div-spacer-title">#SeanTrek</div>
                    <TextBoxIntro>
                        I have traveled all around the US and a few places in Canada. 
                        It's always interesting to find stuff in your own country that's different from what you are use to.
                    </TextBoxIntro>
                </div> */}
            </div>
        )
    }
}

BoxParallax.PropTypes = {
    photos: PropTypes.array
}

export default BoxParallax
