import PropTypes from 'prop-types'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = { sticky: false }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll () {
        if (window.scrollY > this.props.headerLimit) {
            this.setState({ sticky: true, show: true })
        } else {
            this.setState({ sticky: false, show: this.props.show })
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({show: nextProps.show})
    }

    componentWillMount () {
        this.setState({ show: this.props.show })
        window.addEventListener('scroll', this.handleScroll)
    }

    render () {
        return <header className={'header-main ' +
            (this.state.sticky ? 'sticky' : '') +
            (!this.state.show ? ' hide' : ' show')
        }>
            <nav className="header-text">
                <Link to={this.props.href}>
                    {this.props.title}
                </Link>
                <div className="header-options">
                    <NavLink to="/treks" activeClassName="active">
                        Treks
                    </NavLink>
                    <NavLink to="/states" activeClassName="active">
                        States
                    </NavLink>
                    <NavLink to="/sites" activeClassName="active">
                        Sites
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </div>
            </nav>
        </header>
    }
}

Header.PropTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    headerLimit: PropTypes.integer
}
Header.defaultProps = {
    title: '#SeanTrek',
    href: '/',
    headerLimit: 300,
    show: true
}

export default Header
