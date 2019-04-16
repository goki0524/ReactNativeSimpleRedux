import {
    combineReducers,
    createStore,
} from 'redux';


// actions.js
export const deleteName = () => ({
    type: 'DELETE_NAME',
    name: '',
});

export const setName = name => ({
    type: 'ADD_NAME',
    name: name,
});

INITIAL_STATE = {
    name: 'Nanashi'
}

// reducers.js
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'ADD_NAME':
            return {...state, name: action.name}
        case 'DELETE_NAME':
            return {...state, name: ''}
        default:
            return state;
    }
}

export const reducers = combineReducers({
    user: reducer
})


// store.js
export const store = createStore(reducers)

console.table(store.getState)

console.log(typeof store.getState)

console.log(store)
