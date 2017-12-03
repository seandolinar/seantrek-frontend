import PropTypes from 'prop-types'
import React from 'react'
import TextBoxIntro from '../0_atoms/TextBoxIntro'

class MainPhotoBox extends React.Component {
    constructor (props) {
        super(props)

        // const windowWidth = 2000 // window.innerWidth
        const windowLeftAdjust = -Math.max((2000 - window.innerWidth) / 2, 0)

        this.state = {bottom: 500, transformValue: 0, windowLeftAdjust}

        this.handleScroll = this.handleScroll.bind(this)
        this.handleResize = this.handleResize.bind(this)
    }

    componentWillMount () {
        const throttleScroll = this.handleScroll
        window.addEventListener('scroll', throttleScroll)
        window.addEventListener('resize', this.handleResize)
    }

    handleResize () {
        // const windowWidth = 2000 // window.innerWidth
        const windowLeftAdjust = -Math.max((2000 - window.innerWidth) / 2, 0)
        this.setState({windowLeftAdjust})
    }

    handleScroll () {
        window.requestAnimationFrame(() => {
            let scrollNew = window.scrollY / 2
            let transform = 'translate3d(0,' + scrollNew + 'px,0)'
            this.setState({ transform, transformValue: window.scrollY })
        })
    }

    render () {


        return (
            <div className="cover-container">
                <div className="cover-fixed-div" style={{'top': -this.state.transformValue}}>
                    <img
                        src="//stats.seandolinar.com/photos_seantrek/cover/seantrek_cover.jpg"
                        className="cover-img"
                        style={{'bottom': 500, 'transform': this.state.transform, 'width': 2000, 'left': this.state.windowLeftAdjust} }/>
                </div>
                <div className="cover-text-box-intro" style={{'top': 300}}>

                </div>
                <div className="cover-div-spacer" style={{'height': 700}}>
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
