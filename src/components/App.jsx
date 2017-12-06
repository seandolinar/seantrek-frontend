import React from 'react'
import Header from './0_atoms/Header'

import MainParallax from './1_molecules/MainParallax'

import PageMain from './4_pages/PageMain'
import PageTreks from './4_pages/PageTreks'
import PageTrip from './4_pages/PageTrip'
import PageState from './4_pages/PageState'
import PagePresident from './4_pages/PagePresident'
import Page404 from './4_pages/Page404'
import PageAbout from './4_pages/PageAbout'

import ComponentManifest from './_ComponentManifest'

import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
    // constructor (props) {
    //     super(props)
    // }

    render () {
        return (
            <div className="seantrek-app-main" onScroll={this.handleWheel}>
                <Switch>
                    <Route exact path="/" render={() => {
                        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                        return <Header headerLimit={vh} show={false} />
                    }}/>
                    <Route path="*" render={() => {
                        return <div>
                            <Header />
                        </div>
                    }}/>
                </Switch>
                <Switch>
                    <Route exact path="/" component={MainParallax}/>
                </Switch>
                <div className="seantrek-page">
                    <Switch>
                        <Route exact path="/" component={PageMain}/>
                        <Route path="/about" component={PageAbout}/>
                        <Route exact path="/treks" component={PageTreks}/>
                        <Route path="/treks/:trip_name" component={PageTrip}/>
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

export default App
