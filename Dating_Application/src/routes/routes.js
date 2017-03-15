import React from 'react';
import { Route, IndexRoute } from 'react-router';


export default {
    path: '/',

    getChildRoutes(partialNextState, callback) {
        require.ensure([], function(require) {
            callback(null, [
                require('routes/LandingPage'),
                require('routes/RegistrationPhotographer'),
                require('routes/RegistrationClient'),


            ])
        })
    },

    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../pages/LandingPage'),
            })
        })
    }

    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                 require('../containers/App'),
            })
        })
    }


},
