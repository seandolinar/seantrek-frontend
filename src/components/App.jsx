import React from 'react'
import Header from './0_atoms/Header'

import PageMain from './4_pages/PageMain'
import PageTrip from './4_pages/PageTrip'
import PageState from './4_pages/PageState'

import { Link, Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fetchTrips } from '../redux/actions/thunks'

// import { fetchTrips } from '../redux/actions/thunks'
// import { connect } from 'react-redux'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // componentWillMount () {
    //     //if (_.isEmpty(this.props.entities.trips)) {
    //     this.props.fetchTrips()
    //     //}
    // }

    handleClick () {
    }

    render () {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={PageMain}/>
                    <Route path="/trip/:trip_name" component={PageTrip}/>
                    <Route path="/state/:state_name" component={PageState}/>
                </Switch>
            </div>
        )
    }
}

// export default connect(
//     (state) => ({
//         entities: state.entities
//     }),
//     { fetchTrips }
// )(App)

export default App
