import PropTypes from 'prop-types'
import React from 'react'

class TextBoxIntro extends React.Component {
    render () {
        return <div className="text-box-intro">{this.props.children}</div>
    }
}

TextBoxIntro.PropTypes = {
    children: PropTypes.string
}
TextBoxIntro.defaultProps = {
    children: '[Enter Text]'
}

export default TextBoxIntro
