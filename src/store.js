// store.js
import { combineReducers, createStore } from 'redux';

// Initial states
const initialAuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

// Reducer for authentication
const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            };
        default:
            return state;
    }
};

// Other reducers (e.g., for counters or other features)
const initialCounterState = { count: 0 };
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
});

// Create the store
const store = createStore(rootReducer);

export default store;
