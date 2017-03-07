import { createStore } from 'redux';

const reducer = function() {

}


//Pass inreducer and initial value//
const store = createStore(reducer, 0);


store.subscribe(() => {
    console.log("Store changed", store.getState())
})
