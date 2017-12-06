// import PropTypes from 'prop-types'
import React from 'react'
// import {Link} from 'react-router-dom'

// import { fetchPresident } from '../../redux/actions/thunks'
// import { connect } from 'react-redux'
import test from '../common/test'

class Page404 extends React.Component {
    componentDidMount () {
        test() // d3 call
    }
    render () {
        return <div className="d3-test">404!</div>
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

export default Page404
