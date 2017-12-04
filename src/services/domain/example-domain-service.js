import DataAccessService from '../data/data-access-service'

function _getShortDelay () {
    return _getRandomDelayBetween(1, 3, 2)
}

function _getRandomDelayBetween (min, max, roundTo) {
    return Number(Math.random() * (max - min) + min).toFixed(roundTo)
}

const ExampleDomainService = {
    /**
     * Example usage for DataAccessService
     * @returns {*}
     */
    // getTrips () {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/trips')
    // },
    // getTripOne (id) {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/tripone/' + id)
    // },
    // getState (state) {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/state/' + state)
    // },
    // getPresident (president) {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/president/' + president)
    // },
    getTrips () {
        return DataAccessService.get('//localhost:5000/api/trips')
    },
    getTripOne (id) {
        return DataAccessService.get('//localhost:5000/api/tripone/' + id)
    },
    getState (state) {
        return DataAccessService.get('//localhost:5000/api/state/' + state)
    },
    getPresident (president) {
        return DataAccessService.get('//localhost:5000/api/president/' + president)
    },
    getFakePromise (doReject) {
        // doReject as true will throw an error
        return new Promise((resolve, reject) => {
            const delay = _getShortDelay()
            setTimeout(() => {
                doReject
                    ? reject(new Error('Fake Error!'))
                    : resolve({delay})
            }, delay * 1000)
        })
    }
}

export default ExampleDomainService
