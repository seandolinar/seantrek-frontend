import PropTypes from 'prop-types'
import React from 'react'
// import {Link} from 'react-router-dom'

class BoxStatic extends React.Component {
    constructor (props) {
        super(props)

        this.state = { }
        this.handleHover = this.handleHover.bind(this)
    }

    handleHover (e) {
    }

    render () {
        return <div className="box-static-img-header" style={ {'backgroundImage': 'url("' + this.props.url + '")', 'height': (this.props.height || 300)} } >
            <div className="box-static-img-header-bkgd">
                {this.props.children}
            </div>
        </div>
    }
}

BoxStatic.PropTypes = {
    photos: PropTypes.array
}

export default BoxStatic
