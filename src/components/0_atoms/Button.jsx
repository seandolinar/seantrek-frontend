import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

class Button extends React.Component {
    constructor (props) {
        super(props)
        this.state = { active: false }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.props.onClick && this.props.onClick()
        this.setState({active: true})
    }

    render () {
        const button = <button onMouseDown={this.handleClick}>
            <span>{this.props.children}</span>
            <span className={ 'button-push-animation' + (this.state.active ? ' active' : '') }></span>
        </button>

        if (this.props.to) {
            return <Link to={this.props.to}>
                {button}
            </Link>
        } else {
            return button
        }
    }
}

Button.PropTypes = {
    children: PropTypes.string
}
Button.defaultProps = {
    children: '[Enter Text]'
}

export default Button
