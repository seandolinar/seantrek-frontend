import { increment, decrement, reset } from '../redux/actions/action-creators'

export const ENTITY_KEY = {
    TRIPS: 'trips',
    TRIPONE: 'trip_one',
    PRESIDENT: 'president'
}

export const INITIAL_STATE = {
    entities: {
        [ENTITY_KEY.TRIPS]: {},
        [ENTITY_KEY.TRIPONE]: {},
        [ENTITY_KEY.PRESIDENT]: {}

    }
}

export const ROUTES = [
    {
        path  : null,
        label : 'Increment',
        action: increment
    },
    {
        path  : '/decrement',
        label : 'Decrement',
        action: decrement
    },
    {
        path  : '/reset',
        label : 'Reset',
        action: reset
    }
];
