import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor (props) {
        super(props)
        console.log(props)
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
        console.log(nextProps)
        this.setState({show: nextProps.show})
    }

    componentWillMount () {
        window.addEventListener('scroll', this.handleScroll)
    }

    render () {
        console.log(this.props)
        return <Link to={this.props.href}>
            <div className={'header-main ' +
            (this.state.sticky ? 'sticky' : '') +
            (this.state.show ? ' show' : ' hide')
            }>
                <h1 className="header-text">{this.props.title}</h1>
            </div>
        </Link>
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
