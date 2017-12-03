// import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

import { fetchPresident } from '../../redux/actions/thunks'
import { connect } from 'react-redux'

class PagePresident extends React.Component {
    componentWillMount () {
        this.props.fetchPresident(this.props.match.params.president_number)
    }
    render () {
        let data = _.first(this.props.entities.president.data)

        if (data) {
            return <div>{data.president_last}</div>
        } else {
            return 'no data'
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
    { fetchPresident }
)(PagePresident)
