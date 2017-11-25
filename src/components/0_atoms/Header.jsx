import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {
    render () {
        return <div className="header-main"><h1 className="header-text">{this.props.title}</h1></div>
    }
}

Header.PropTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: '#SeanTrek'
}

export default Header
