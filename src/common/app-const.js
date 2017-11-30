import { increment, decrement, reset } from '../redux/actions/action-creators'

export const ENTITY_KEY = {
    FOO: 'foo',
    BAR: 'bar',
    BAZ: 'baz',
    TRIPS: 'trips',
    TRIPONE: 'trip_one'
    
}

export const INITIAL_STATE = {
    entities: {
        [ENTITY_KEY.FOO]: {},
        // [ENTITY_KEY.BAR]: {},
        // [ENTITY_KEY.BAZ]: {},
        [ENTITY_KEY.TRIPS]: {},
        [ENTITY_KEY.TRIPONE]: {}

    },
    counter: 0
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
