export default {
    path: '/landing-page',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../pages/LandingPage'))
        })
    }
}
