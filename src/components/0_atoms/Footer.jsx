import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor (props) {
        super(props)
        // this.state = { sticky: false }
        // this.handleScroll = this.handleScroll.bind(this)
    }

    // handleScroll () {
    //     if (window.scrollY > this.props.headerLimit) {
    //         this.setState({ sticky: true, show: true })
    //     } else {
    //         this.setState({ sticky: false, show: this.props.show })
    //     }
    // }

    // componentWillReceiveProps (nextProps) {
    //     this.setState({show: nextProps.show})
    // }

    // componentWillMount () {
    //     this.setState({ show: this.props.show })
    //     window.addEventListener('scroll', this.handleScroll)
    // }

    render () {
        return <footer>#SeanTrek</footer>
    }
}

Footer.PropTypes = {
    // title: PropTypes.string,
    // href: PropTypes.string,
    // headerLimit: PropTypes.integer
}
Footer.defaultProps = {
    // title: '#SeanTrek',
    // href: '/',
    // headerLimit: 300,
    // show: true
}

export default Footer
