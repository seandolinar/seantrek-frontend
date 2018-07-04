// import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

import { fetchTripOne } from '../../redux/actions/thunks'
import { connect } from 'react-redux'
import PhotoGrid from '../1_molecules/PhotoGrid'
import MapBox from '../1_molecules/MapBox'

import Button from '../0_atoms/Button'

import map from '../common/map'
// import BoxParallax from '../1_molecules/BoxParallax'
import BoxStatic from '../1_molecules/BoxStatic'

class PageTrek extends React.Component {
    constructor (props) {
        super(props)
        this.state = {mapData: {}}
    }


    componentWillMount () {
        this.props.fetchTripOne(this.props.match.params.trip_name)
    }

    componentDidMount () {
    }

    componentDidUpdate () {
        // if (document.getElementById('d3-container').childElementCount === 0 && this.props.entities.trip_one.data) {
        //     // map(this.props.history, newData)
        //     this.setState({ mapData: newData })
        // }
    }

    render () {
        const data = _.first(this.props.entities.trip_one.data)
        console.log(data)
        let photoBox
        let featuredPhoto

        if (data && data.photos) {
            photoBox = <PhotoGrid data={data.photos} />
            featuredPhoto = data.photos.find((d, i) => d.featured === 1)
        }

        if (this.props.entities.trip_one.data) {
            const newData = {}

            _.first(this.props.entities.trip_one.data).states.map((d, i) => {
                newData[d.abbreviation] = {'fillKey': 'THREE'}
            })

            let presidents = data.presidents.map((d, i) => <div key={i}><Link to={'/president/' + d.number}>{d.president_last}</Link></div>)

            console.log(this.props.history.goBack)

            return <div className="page-trek">
                <Button onClick={this.props.history.goBack}>Back</Button>
                <BoxStatic url={'//stats.seandolinar.com/photos_seantrek/web_1000/' + featuredPhoto.photo_name} text={data.trip_label} height="500px">
                    <h3>{data.trip_label}</h3>
                    <div className="trek-date"><span>{data.date_start_display + ' to ' + data.date_end_display}</span></div>
                </BoxStatic>
                <div className="page-trek-main">
                    <div className="page-trek-body">
                        <div className="page-trek-body-desc">
                            {data.trip_desc}
                        </div>
                    </div>
                    <div className="page-trek-body-map">
                        <MapBox data={newData}/>
                    </div>
                    <div className="page-trek-body">
                        <div className="trek-presidents">{presidents}</div>
                        {photoBox}
                    </div>
                </div>
            </div>
        } else {
            return <div id="d3-container"></div>
        }
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

export default connect(
    (state) => ({
        entities: state.entities
    }),
    { fetchTripOne }
)(PageTrek)
