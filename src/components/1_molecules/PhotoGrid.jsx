import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

class PhotoGrid extends React.Component {
    constructor (props) {
        super(props)

        this.state = { }
        this.handleHover = this.handleHover.bind(this)
    }

    handleHover (e) {
        console.log(e)
    }

    render () {
        let data = this.props.data
        let catDict = {N: 'Nature', C: 'Civilization', F: 'Food', H: 'History'}

        let photos = ['N', 'C', 'F', 'H'].map((d, i) => {
            let dataCol = data.filter((e, j) => {
                return e.photo_type === d
            }).map((f, k) => <Link key={k} to={'/photos/' + f.photo_id}><div className="photo-grid-img"
                style={{'backgroundImage': 'url(\'' + '//stats.seandolinar.com/photos_seantrek/med_500/' + f.photo_name + '\')'}}>
                <div className="photo-grid-img-over" onMouseEnter={this.handleHover}>{f.trip_label}</div>
            </div></Link>
            )

            return <div key={i} className="photo-grid-col"><div className="photo-grid-col-header">{catDict[d]}</div>{dataCol}</div>
        })             
        return <div className="photo-grid">{photos}</div>
    }
}

PhotoGrid.PropTypes = {
    photos: PropTypes.array
}

export default PhotoGrid
