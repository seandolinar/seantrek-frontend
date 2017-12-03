import React from 'react'
import Header from './0_atoms/Header'
import MainPhotoBox from './1_molecules/MainPhotoBox'

class ComponentManifest extends React.Component {
    render () {
        return (
            <div>
                <div className="component-manifest-row">
                    <Header />
                </div>
                <div className="component-manifest-row">
                    {/* <MainPhotoBox /> */}
                </div>
            </div>
        )
    }
}

export default ComponentManifest
