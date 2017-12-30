import DataAccessService from '../data/data-access-service'
import NodeService from '../common/node-service'

const apiServer = NodeService.isProduction() ? 'seantrek-api.herokuapp.com' : 'localhost:5000'

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
    // getStateCount () {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/state-count')
    // },
    // getPresident (president) {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/president/' + president)
    // },
    // getTripsFeatured () {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/trips-featured')
    // },
    // getPhotoGrid () {
    //     return DataAccessService.get('//seantrek-api.herokuapp.com/api/photo-grid')
    // }
    // getTrips () {
    //     return DataAccessService.get('//' + apiServer + '/api/trips')
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
    // },
    // getPhoto (photoId) {
    //     return DataAccessService.get('//localhost:5000/api/photos/' + photoId)
    // }
    getTrips () {
        return DataAccessService.get('//' + apiServer + '/api/trips')
    },
    getTripsFeatured () {
        return DataAccessService.get('//' + apiServer + '/api/trips-featured')
    },
    getTripOne (id) {
        return DataAccessService.get('//' + apiServer + '/api/tripone/' + id)
    },
    getState (state) {
        return DataAccessService.get('//' + apiServer + '/api/state/' + state)
    },
    getStateCount () {
        return DataAccessService.get('//' + apiServer + '/api/state-count')
    },
    getPresident (president) {
        return DataAccessService.get('//' + apiServer + '/api/president/' + president)
    },
    getPhotoGrid () {
        return DataAccessService.get('//' + apiServer + '/api/photo-grid')
    },
    getPhoto (photoId) {
        return DataAccessService.get('//' + apiServer + '/api/photos/' + photoId)
    }

}

export default apiAddress
