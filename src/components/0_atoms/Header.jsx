import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render () {
        return <Link to={this.props.href}><div className="header-main"><h1 className="header-text">{this.props.title}</h1></div></Link>
    }
}

Header.PropTypes = {
    title: PropTypes.string,
    href: PropTypes.string
}
Header.defaultProps = {
    title: '#SeanTrek',
    href: '/'
}

export default Header
