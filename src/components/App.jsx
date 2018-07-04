import React from 'react'
import Header from './0_atoms/Header'

import MainParallax from './1_molecules/MainParallax'

import PageMain from './4_pages/PageMain'
import PageTreks from './4_pages/PageTreks'
import PageTrek from './4_pages/PageTrek'
import PageState from './4_pages/PageState'
import PageStateAll from './4_pages/PageStateAll'
import PagePresident from './4_pages/PagePresident'
import PagePhoto from './4_pages/PagePhoto'
import Page404 from './4_pages/Page404'
import PageAbout from './4_pages/PageAbout'
import Footer from './0_atoms/Footer'

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
                        return <Header />
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
                        <Route path="/treks/:trip_name" component={PageTrek}/>
                        <Route exact path="/states" component={PageStateAll}/>
                        <Route path="/states/:state_name" component={PageState}/>
                        <Route path="/president/:president_number" component={PagePresident}/>
                        <Route path="/photos/:photo_id" component={PagePhoto}/>
                        <Route path="/component-manifest" component={ComponentManifest}/>

                        <Route path="*" component={Page404} status={404}/>
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
