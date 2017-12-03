import React from 'react'
import Header from './0_atoms/Header'

import PageMain from './4_pages/PageMain'
import PageTrip from './4_pages/PageTrip'
import PageState from './4_pages/PageState'
import PagePresident from './4_pages/PagePresident'
import ComponentManifest from './_ComponentManifest'

import { Link, Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fetchTrips } from '../redux/actions/thunks'

// import { fetchTrips } from '../redux/actions/thunks'
// import { connect } from 'react-redux'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {bottom: 500}
        this.handleClick = this.handleClick.bind(this)
        this.handleWheel = this.handleWheel.bind(this)
    }

    handleClick () {
    }

    handleWheel (e) {
        let bottom = Math.max(Math.min(this.state.bottom - ((e.nativeEvent.deltaY) / 2), 500),0)
        this.setState({ bottom })
    }

    render () {
        return (
            <div className="seantrek-app-main" onWheel={this.handleWheel}>
                <Header/>
                <Switch>
                    <Route exact path="/" render={() => {
                        return <div className="cover-div">
                            <img src="//stats.seandolinar.com/photos_seantrek/cover/seantrek_cover.jpg" className="cover-img" style={{'bottom': this.state.bottom} }/>
                        </div>
                    }}/>
                </Switch>
                <div className="seantrek-page">
                    <Switch>
                        <Route exact path="/" component={PageMain}/>
                        <Route path="/trip/:trip_name" component={PageTrip}/>
                        <Route path="/state/:state_name" component={PageState}/>
                        <Route path="/president/:president_number" component={PagePresident}/>

                        <Route path="/component-manifest" component={ComponentManifest}/>
                    </Switch>
                </div>
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
