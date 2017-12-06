import DataAccessService from '../data/data-access-service'

const apiAddress = {
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
    getTripsFeatured () {
        return DataAccessService.get('//localhost:5000/api/trips-featured')
    },
    getTripOne (id) {
        return DataAccessService.get('//localhost:5000/api/tripone/' + id)
    },
    getState (state) {
        return DataAccessService.get('//localhost:5000/api/state/' + state)
    },
    getPresident (president) {
        return DataAccessService.get('//localhost:5000/api/president/' + president)
    }
}

export default apiAddress
