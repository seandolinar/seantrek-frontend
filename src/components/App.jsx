import React from 'react'
import Header from './0_atoms/Header'


import MainParallax from './1_molecules/MainParallax'

import PageMain from './4_pages/PageMain'
import PageTrip from './4_pages/PageTrip'
import PageState from './4_pages/PageState'
import PagePresident from './4_pages/PagePresident'
import Page404 from './4_pages/Page404'
import ComponentManifest from './_ComponentManifest'

import { Link, Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fetchTrips } from '../redux/actions/thunks'

// import { fetchTrips } from '../redux/actions/thunks'
// import { connect } from 'react-redux'

class App extends React.Component {
    constructor (props) {
        super(props)

        // const windowWidth = 2000 // window.innerWidth
        // const windowLeftAdjust = -Math.max((2000 - window.innerWidth) / 2, 0)

        // this.state = {bottom: 500, transformValue: 0, windowLeftAdjust}
        this.handleClick = this.handleClick.bind(this)
        this.handleWheel = this.handleWheel.bind(this)
    }

    // componentWillMount () {
    //     const throttleScroll = this.handleScroll
    //     window.addEventListener('scroll', throttleScroll)
    //     window.addEventListener('resize', this.handleResize)
    // }

    // handleResize () {
    //     const windowWidth = 2000 // window.innerWidth
    //     const windowLeftAdjust = -Math.max((2000 - window.innerWidth) / 2, 0)
    //     this.setState({windowLeftAdjust})
    // }

    // handleScroll () {
    //     window.requestAnimationFrame(() => {
    //         let scrollNew = window.scrollY / 2
    //         let transform = 'translate3d(0,' + scrollNew + 'px,0)'
    //         this.setState({ transform, transformValue: window.scrollY })
    //     })
    // }

    handleClick () {
    }

    handleWheel (e) {

    }

    render () {
        return (
            <div className="seantrek-app-main" onScroll={this.handleWheel}>
                {/* <Header/> */}
                <Switch>
                    <Route exact path="/" component={MainParallax}/>
                    <Route path="*" component={Header} />
                </Switch>
                <div className="seantrek-page">
                    <Switch>
                        <Route exact path="/" component={PageMain}/>
                        <Route path="/trip/:trip_name" component={PageTrip}/>
                        <Route path="/state/:state_name" component={PageState}/>
                        <Route path="/president/:president_number" component={PagePresident}/>

                        <Route path="/component-manifest" component={ComponentManifest}/>

                        <Route path="*" component={Page404}/>

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
