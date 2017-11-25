import React from 'react'

class Bullet extends React.Component {
    render () {
        return (
            <i
                className="fa fa-angle-right"
                style={{
                    fontWeight : 700,
                    marginRight: 10
                }}
            />
        )
    }
}

export default Bullet
