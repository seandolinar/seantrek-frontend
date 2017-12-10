import { increment, decrement, reset } from '../redux/actions/action-creators'

export const ENTITY_KEY = {
    TRIPS: 'trips',
    TRIPONE: 'trip_one',
    TRIPSFEATURED: 'trips_featured',
    PRESIDENT: 'president',
    STATECOUNT: 'state_count',
    PHOTOGRID: 'photo_grid'
}

export const INITIAL_STATE = {
    entities: {
        [ENTITY_KEY.TRIPS]: {},
        [ENTITY_KEY.TRIPSFEATURED]: {},
        [ENTITY_KEY.TRIPONE]: {},
        [ENTITY_KEY.PRESIDENT]: {},
        [ENTITY_KEY.STATECOUNT]: {},
        [ENTITY_KEY.PHOTOGRID]: {}
    }
}
