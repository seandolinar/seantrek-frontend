import React from 'react'
import Header from './0_atoms/Header'
import TextBoxIntro from './0_atoms/TextBoxIntro'
import HeaderTrip from './0_atoms/HeaderTrip'
import MainPhotoBox from './1_molecules/MainPhotoBox'

import ExampleDomainService from '../services/domain/example-domain-service'
import { fetchFoo, fetchTrips } from '../redux/actions/thunks'
import { connect } from 'react-redux'


class App extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount () {
        // fetchTrips()
        // console.log(fetchTrips())
        this.props.fetchTrips()
    }

    handleClick () {
        // console.log(ExampleDomainService.getTrips())
        // console.log(ExampleDomainService.getFakePromise(true))
    }

    render () {
        let data = this.props.entities.trips.data
        let list = ''
        let photos = ''
        if (data) {
            list = data.map((d, i) => {
                return <li key={i}>
                <HeaderTrip trip={d.trip_label} />
                <div>{d.trip_desc}</div>
                <MainPhotoBox photos={d.photos} />
                </li>
            })
        }

        return (
            <div>
                <Header/>
                <TextBoxIntro>
                    My name is Sean and I like to travel. Specifically, driving.
                </TextBoxIntro>
                <ul>{list}</ul>
                
            </div>
        )
    }
}


export default connect(
    (state) => ({
        entities: state.entities
    }),
    { fetchTrips }
)(App)
