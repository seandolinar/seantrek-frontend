// import PropTypes from 'prop-types'
import React from 'react'
// import {Link} from 'react-router-dom'

// import { fetchPresident } from '../../redux/actions/thunks'
// import { connect } from 'react-redux'

class PageAbout extends React.Component {
    componentWillMount () {
    }
    render () {
        return (
            <div>
                <h2>About</h2>
                <div>
                    <p>
                        In 2011, I flew out to Arizona for work in the middle of February. It was the first time in several years I was out west, and it felt adventourous. 
                        I also felt the need to drive from Pittsburgh to the Pacfic on my own. I would do that in 2012 after living in Chicago for a summer.
                    </p>
                    <p>
                        First, I went on three mini road trips in 2011. One to Toronto, Philly, NYC. One to Minneapolis and Fargo. And one down to Orlando.
                    </p>
                    <p>
                        Finally, in 2012 got around the US.
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
