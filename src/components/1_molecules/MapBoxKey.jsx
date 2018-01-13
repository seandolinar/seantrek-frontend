// import PropTypes from 'prop-types'
import React from 'react'

class MapBoxKey extends React.Component {
    render () {
        let colorKey = [
            {
                val: '1',
                color: '#eaeff4'
            },
            {
                val: '2',
                color: '#c1d1e0'
            },
            {
                val: '3',
                color: '#99b2cc'
            },
            {
                val: '4',
                color: '#7093b7'
            },
            {
                val: '5+',
                color: '#4775a3'
            }
            // {
            //     val: '6+',
            //     color: '#2d5b89'
            // }
        ]


        let key = colorKey.map((d, i) => <div className="map-box-key-item" key={i}>
            <span style={{'backgroundColor': d.color}}></span>
            <div className="map-box-key-item-val">{d.val}</div>
        </div>)


        return <div className="map-box-key"><div className="map-box-key-item-val" style={{'text-align': 'right'}}>visits</div>{key}</div>
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

export default MapBoxKey

// ONE: '#eaeff4',
//                 TWO: '#c1d1e0',
//                 THREE: '#99b2cc',
//                 FOUR: '#7093b7',
//                 FIVE: '#4775a3',
//                 SIX: '#2d5b89',