import { ENTITY_KEY } from '../../common/app-const'
import { loadEntity } from 'redux-entity'
import apiAddress from '../../services/api/api-address'

export function fetchTrips () {
    return loadEntity(
        ENTITY_KEY.TRIPS,
        apiAddress.getTrips()
    )
}

export function fetchTripsFeatured () {
    return loadEntity(
        ENTITY_KEY.TRIPSFEATURED,
        apiAddress.getTripsFeatured()
    )
}

export function fetchTripOne (id) {
    return loadEntity(
        ENTITY_KEY.TRIPONE,
        apiAddress.getTripOne(id)
    )
}

export function fetchState (state) {
    return loadEntity(
        ENTITY_KEY.TRIPS,
        apiAddress.getState(state)
    )
}

export function fetchStateCount () {
    return loadEntity(
        ENTITY_KEY.STATECOUNT,
        apiAddress.getStateCount()
    )
}

export function fetchPresident (president) {
    return loadEntity(
        ENTITY_KEY.PRESIDENT,
        apiAddress.getPresident(president)
    )
}

export function fetchPhotoGrid (president) {
    return loadEntity(
        ENTITY_KEY.PHOTOGRID,
        apiAddress.getPhotoGrid()
    )
}

export function fetchPhoto (photoId) {
    return loadEntity(
        ENTITY_KEY.PHOTO,
        apiAddress.getPhoto(photoId)
    )
}
