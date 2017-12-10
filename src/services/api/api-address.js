import DataAccessService from '../data/data-access-service'

const apiAddress = {
    /**
     * Example usage for DataAccessService
     * @returns {*}
     */
    getTrips () {
        return DataAccessService.get('//seantrek-api.herokuapp.com/api/trips')
    },
    getTripOne (id) {
        return DataAccessService.get('//seantrek-api.herokuapp.com/api/tripone/' + id)
    },
    getState (state) {
        return DataAccessService.get('//seantrek-api.herokuapp.com/api/state/' + state)
    },
    getPresident (president) {
        return DataAccessService.get('//seantrek-api.herokuapp.com/api/president/' + president)
    },
    getTripsFeatured () {
        return DataAccessService.get('//seantrek-api.herokuapp.com/api/trips-featured')
    },
    getPhotoGrid () {
        return DataAccessService.get('//seantrek-api.herokuapp.com/api/photo-grid')
    }
    // getTrips () {
    //     return DataAccessService.get('//localhost:5000/api/trips')
    // },
    // getTripsFeatured () {
    //     return DataAccessService.get('//localhost:5000/api/trips-featured')
    // },
    // getTripOne (id) {
    //     return DataAccessService.get('//localhost:5000/api/tripone/' + id)
    // },
    // getState (state) {
    //     return DataAccessService.get('//localhost:5000/api/state/' + state)
    // },
    // getStateCount () {
    //     return DataAccessService.get('//localhost:5000/api/state-count')
    // },
    // getPresident (president) {
    //     return DataAccessService.get('//localhost:5000/api/president/' + president)
    // },
    // getPhotoGrid () {
    //     return DataAccessService.get('//localhost:5000/api/photo-grid')
    // }
}

export default apiAddress
