import { ENTITY_KEY } from '../../common/app-const'
import { loadEntity } from 'redux-entity'
import ExampleDomainService from '../../services/domain/example-domain-service'

export function fetchTrips () {
    return loadEntity(
        ENTITY_KEY.TRIPS,
        ExampleDomainService.getTrips()
    )
}

export function fetchTripOne (id) {
    return loadEntity(
        ENTITY_KEY.TRIPONE,
        ExampleDomainService.getTripOne(id)
    )
}

export function fetchState (state) {
    return loadEntity(
        ENTITY_KEY.TRIPS,
        ExampleDomainService.getState(state)
    )
}

export function fetchPresident (president) {
    return loadEntity(
        ENTITY_KEY.PRESIDENT,
        ExampleDomainService.getPresident(president)
    )
}