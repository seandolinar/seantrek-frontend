import { increment, decrement, reset } from '../redux/actions/action-creators'

export const ENTITY_KEY = {
    TRIPS: 'trips',
    TRIPONE: 'trip_one',
    TRIPSFEATURED: 'trips_featured',
    PRESIDENT: 'president'
}

export const INITIAL_STATE = {
    entities: {
        [ENTITY_KEY.TRIPS]: {},
        [ENTITY_KEY.TRIPSFEATURED]: {},
        [ENTITY_KEY.TRIPONE]: {},
        [ENTITY_KEY.PRESIDENT]: {}

    }
}
