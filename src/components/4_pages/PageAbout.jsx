// import PropTypes from 'prop-types'
import React from 'react'
// import {Link} from 'react-router-dom'

// import { fetchPresident } from '../../redux/actions/thunks'
// import { connect } from 'react-redux'

// import BoxParallax from '../1_molecules/BoxParallax'
import BoxStatic from '../1_molecules/BoxStatic'

class PageAbout extends React.Component {
    componentWillMount () {
    }
    render () {
        return (
            <div>
                <div className="seantrek-page-about">
                    <h2>About</h2>
                    <h3>The Setup</h3>
                    <p>
                        In 2011, I flew out to Arizona for work in the middle of February. It was the first time in several years I was out west, and it felt adventourous. 
                        I also felt the need to drive from Pittsburgh to the Pacfic on my own. I have always had an afinity for road trips. As a kid, all our family vacations 
                        involved piling into the minivan and driving hours to different National Parks and beaches.
                        
                        [Pittsburgh to Chicago Photo]
                        I would do that in 2012 after living in Chicago for a summer.
                    </p>
                    <p>
                        First, I went on three mini road trips in 2011. One to Toronto, Philly, NYC. One to Minneapolis and Fargo. And one down to Orlando.
                    </p>
                    <p>
                        Finally, in 2012 got around the US. The contract for my video editing job in Chicago ended. Before I started a new job, I took the oppurtunity to drive 
                        to the Pacific and back.
                    </p>
                </div>
                <BoxStatic url="//stats.seandolinar.com/photos_seantrek/web_1000/seantrek_o_05.JPG">
                    <span className="box-static-about-text">The Hashtag</span>
                </BoxStatic>
                <div className="seantrek-page-about">
                    <p>
                        During the first day of driving, somewhere in Ohio with all the time I had alone in the car, I came up with the hashtag #SeanTrek. It combined one of my 
                        favorite Sci-Fi franchises with my name. I thought it conveyed the scope and spirit of the trip I was just starting {'-'} one that spanned a continent and was 
                        full of exploration.
                    </p>
                    <p>
                        On the trip I challenged myself to log the trip on social media creating a detail record using data exhaust from the apps on my iPhone. I also wanted my friends
                        to be able to follow along as I went around the country. In 2012, Instagram was just starting to take off, so people weren't exhausted from social media lifestyle
                        posts. It was also four years before the 2016 election, so Twitter still had a lot of non-political content on it. The second part of the challenge would be to 
                        photograph the trip using on my iPhone 4S. This certainly had its limitations, but the iPhone's camera produced some really gorgeous landscape photos with enough fiddling.
                    </p>
                    <h3>This Site</h3>
                    <p>
                        It's been five years since the first #SeanTrek, and I've taken many smaller trips since in the same spirit. The idea being to explore the US (and Canada)
                        in the particular way I like to travel.
                    </p>
                </div>
            </div>
        )
    }
}

// MapBox.PropTypes = {
//     photos: PropTypes.array
// }

// export default connect(
//     (state) => ({
//         entities: state.entities
//     }),
//     { fetchPresident }
// )(PagePresident)

export default PageAbout
