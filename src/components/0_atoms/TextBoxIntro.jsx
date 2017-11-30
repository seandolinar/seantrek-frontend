import PropTypes from 'prop-types'
import React from 'react'

class TextBoxIntro extends React.Component {
    render () {
        return <div className="text-box-intro"><div className="text-box-intro-copy">{this.props.children}</div></div>
    }
}

TextBoxIntro.PropTypes = {
    children: PropTypes.string
}
TextBoxIntro.defaultProps = {
    children: '[Enter Text]'
}

export default TextBoxIntro
