// import PropTypes from 'prop-types'
import React from 'react'
import MapBoxKey from '../1_molecules/MapBoxKey'
import map from '../common/map'

class MapBox extends React.Component {

    componentWillMount () {
    }


    componentDidMount () {
        const width = this.textInput.offsetWidth
        this.textInput.style.width = Math.min(700, width) + 'px'
        this.textInput.style.height = (Math.min(700, width) / 700 * 450) + 'px'
        this.textInput.style.flex = '0 1 ' + Math.min(700, width) + 'px'
        this.map = map(this.props.history, {})
        this.map.updateChoropleth(this.props.data)
        console.log('mount')
    }
    componentDidUpdate (prevProps, prevState) {
        // console.log(this.props.data)
        // this.map.updateChoropleth({})

        this.map.updateChoropleth(this.props.data, {reset: true})
    }

    render () {
        return <div className="map-box">
            <div id="d3-container" ref={(input) => { this.textInput = input }} ></div>
            {this.props.showKey ? <MapBoxKey /> : null}
        </div>
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

export default MapBox
